import Head from 'next/head'
import { Inter } from 'next/font/google'
import Slider from '@/components/Slider/Slider'
import Showing from '@/components/Showing/Showing'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import Layout from '@/components/Layout/Layout'
import UserContext from '@/contextapi/UserContext'

// import SingleGallery from '@/components/Gallery/SingleGallery'
import { api_config } from '@/requests'

const {library} = require('@fortawesome/fontawesome-svg-core') // this instead of import prevents hydration error
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import { useContext, useEffect, useState } from 'react'

library.add(fab, far, fas)

const inter = Inter({ subsets: ['latin'] })

export default function Home({upcoming_data, now_showing_data}) {

  const {login} = useContext(UserContext)

    const [params, setParams] = useState(null)

    if (params){
    let success = params.get("success")
    if (success){
        let user_id = params.get("id")
        login(user_id)
        setParams(null)
        window.history.replaceState(null, '', window.location.pathname);
    }
    }

    useEffect(() => {
        setParams((new URL(document.location)).searchParams)
    }, [])


  return (
      <div className=''>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"/>
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#ffc300"/>
            <meta name="theme-color" content="#ffc300"/>
        </Head>
        <Layout title={"Cinema Train - Home"}>
          <Slider showing={now_showing_data} />
          <Showing showing={now_showing_data} />
          <ComingSoon coming_soon={upcoming_data} />
          {/* <Gallery /> */}
        </Layout>
      </div>
  )
}


export async function getServerSideProps() {

  // genre is universal so we get it and map the movie genre IDs accordingly
  let genre = await fetch(`${api_config.genre_endpoint}`)
  genre = await genre.json()

  // get movie credit and set genre
  const getCreditsAndGenres = async (movies) => {
    // credits
      for (let i = 0; i < movies.length; i++){
      // get credits
      let credits = await fetch(`${api_config.movies_endpoint}/${movies[i].id}/credits?api_key=${api_config.apiKey}&language=en-US`)
      // set credits
      credits = await credits.json()
      movies[i].cast = credits.cast.slice(0, 5)

      // set genre
      for (let mg = 0; mg < movies[i].genre_ids.length; mg++){
        for (let g = 0; g < genre.genres.length; g++){
          if (genre.genres[g].id === movies[i].genre_ids[mg]){
              movies[i].genre_ids[mg] = genre.genres[g]
          }
        }
      }
      // end set genre
    }
    return movies
  }

  // get upcoming movies
  const upcoming = await fetch(`${api_config.movies_endpoint}/upcoming?api_key=${api_config.apiKey}&language=en-US&page=1&region=US`)
  let upcoming_data = await upcoming.json()
  // take the first 6 upcoming movies
  upcoming_data = upcoming_data.results.slice(0, 6)

  // get now showing movies
  const now_showing = await fetch(`${api_config.movies_endpoint}/now_playing?api_key=${api_config.apiKey}&language=en-US&page=1&region=US`)
  let now_showing_data = await now_showing.json()
  // take the first 8 now showing movies
  now_showing_data = now_showing_data.results.slice(0, 8)

  now_showing_data = await getCreditsAndGenres(now_showing_data)
  upcoming_data = await getCreditsAndGenres(upcoming_data)

  return {
    props: { now_showing_data, upcoming_data }
  }
}
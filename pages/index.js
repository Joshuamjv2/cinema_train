import Head from 'next/head'
import { Inter } from 'next/font/google'
import Slider from './components/Slider/Slider'
import Showing from './components/Showing/Showing'
import ComingSoon from './components/ComingSoon/ComingSoon'
import Layout from './components/Layout/Layout'
import Gallery from './components/Gallery/Gallery'
import api_config from './requests'

const inter = Inter({ subsets: ['latin'] })

export default function Home({upcoming_data, now_showing_data}) {
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
  const upcoming = await fetch(`${api_config.endpoint}/upcoming?api_key=${api_config.apiKey}&language=en-US&page=1&region=US`)

  const upcoming_data = await upcoming.json()

  const now_showing = await fetch(`${api_config.endpoint}/now_playing?api_key=${api_config.apiKey}&language=en-US&page=1&region=US`)

  const now_showing_data = await now_showing.json()

  return {
    props: { now_showing_data, upcoming_data }
  }
}
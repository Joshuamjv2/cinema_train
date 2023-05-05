import Layout from "@/components/Layout/Layout";
import { api_config } from "@/requests";
import { Inter } from "next/font/google";


import MovieSlider from "@/components/SingleMovie/MovieSlider";

const inter = Inter({ subsets: ['latin'] })

export const getStaticPaths = async () => {
    const res = await fetch(`${api_config.movies_endpoint}/now_playing?api_key=${api_config.apiKey}&language=en-US&page=1&region=US`)
    const data = await res.json()

    const paths = data.results.map(movie => {
        return {
            params: {
                id: movie.id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const movie = await fetch(`${api_config.movies_endpoint}/${id}?api_key=${api_config.apiKey}&language=en-US`)
    let movie_data = await movie.json()

    // console.log(movie_data)
    const credits = await fetch(`${api_config.movies_endpoint}/${id}/credits?api_key=${api_config.apiKey}&language=en-US`)
    const credits_data = await credits.json()

    const trailers = await fetch(`${api_config.movies_endpoint}/${id}/videos?api_key=${api_config.apiKey}&language=en-US`)
    let trailer_data = await trailers.json()
    trailer_data = trailer_data.results

    let official_trailer;
    let official_teaser;
    for (let i = 0; i < trailer_data.length; i++){
        const vid_type = trailer_data[i].type.toLowerCase()
        if (trailer_data[i].official & vid_type == "trailer"){
            official_trailer = trailer_data[i];
            break;

        }else if (trailer_data[i].official & vid_type == "teaser"){
            official_teaser = trailer_data[i];
        }
    }


    movie_data.cast = credits_data.cast
    if (official_trailer){
        movie_data.trailer = official_trailer
    } else {
        movie_data.trailer = official_teaser
    }
    if (movie_data.trailer === undefined){
        movie_data.trailer = false
    }
    return {props: {movie: movie_data}}
}


export default function Movie({movie}){
    return (
        <Layout title={movie.title}>
            <MovieSlider movie={movie} />
        </Layout>
    )
}

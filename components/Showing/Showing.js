import SingleMovie from "./SingleMovie"
import Link from "next/link"


export default function Showing({showing}){
    const movies = showing
    // console.log(movies[0])
    return(
        <div className="flex justify-center" id="now_showing">
            <div className="pb-8 mt-16 mx-auto px-4 md:px-12 max-w-xl md:max-w-7xl lg:container">
                <h2 className="text-4xl font-bold text-[#ffc300] py-8 uppercase">Now Showing</h2>
                <ul className="gap-4 md:gap-8 grid md:grid-cols-3 lg:grid-cols-4 pb-8">
                    {movies.map((movie) =>
                    <Link href={"/showing/"+movie.id}>
                        <SingleMovie key={movie.id} image={`https://image.tmdb.org/t/p/original${movie.poster_path}`} image_width={400} image_height={500} />
                    </Link>
                    )}
                    {/* <SingleMovie image={tetris} image_height={500} />
                    <SingleMovie image={john_wick} image_height={500} />
                    <SingleMovie image={dungeons_dragons} image_height={500} /> */}
                </ul>
            </div>
        </div>
    )
}
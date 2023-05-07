export default function Overview({movie}){
    return(
        <div className="px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container py-4 md:py-8 text-black">
            <h2 className="text-2xl font-bold text-[#ffc300] pb-2 uppercase pt-4">Overview</h2>
            <div className="flex gap-4 items-start">
                <div className="lg:w-2/4 md:w-2/3 ">
                    <p className="text-base mr-4">{movie.overview}</p>
                </div>
                <div className="hidden">
                    <p className="ml-2">add rating</p>
                    <p className="ml-4">add to favorites</p>
                </div>
            </div>

            <div className="">
                <div className="mt-4 lg:w-2/4 md:w-2/3">
                    <div className="flex gap-4 items-center border-b-2 pb-2 font-semibold">
                        <h3 className="uppercase text-[#96031a]">Language:</h3>
                        <p>{movie.original_language}</p>
                    </div>
                </div>

                <div className="mt-4 lg:w-2/4 md:w-2/3">
                    <div className="flex gap-4 items-center border-b-2 pb-2 font-semibold">
                        <h3 className="uppercase text-[#96031a]">Genres:</h3>
                        <ul className="flex gap-4">
                            {movie.genres.map(genre=><li className="border-r-2 pr-4 last:border-r-0">{genre.name}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-4 lg:w-2/4 md:w-2/3">
                    <div className="flex gap-4 items-center border-b-2 pb-2 font-semibold">
                        <h3 className="uppercase text-[#96031a]">Production Countries:</h3>
                        <ul className="flex gap-4">
                            {movie.production_countries.map(production=><li className="border-r-2 pr-4 last:border-r-0">{production.iso_3166_1}</li>)}
                        </ul>
                    </div>
                </div>

                <div className="mt-4 lg:w-2/4 md:w-2/3">
                    <div className="flex gap-4 items-center border-b-2 pb-2 font-semibold">
                        <h3 className="uppercase text-[#96031a]">Status:</h3>
                        <p>{movie.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
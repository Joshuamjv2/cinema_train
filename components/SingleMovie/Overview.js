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

        </div>
    )
}
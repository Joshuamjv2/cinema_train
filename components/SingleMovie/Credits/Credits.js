import SingleCredit from "./SingleCredit";

export default function Credits({cast, crew}){
    return(
        <div className="bg-[#fff] text-[#000]">
            <div className="px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container pt-8">
                <h2 className="text-2xl font-bold text-[#ffc300] pb-4 uppercase">Top Cast</h2>

                <ul className="flex gap-4 xl:gap-8 lg:gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 overflow-x-auto scrollbar-hide">
                    {cast.map((single_cast=>{
                        return <li className="" key={single_cast.id}>
                                <SingleCredit credit={single_cast}/>
                        </li>
                    }))}
                </ul>
            </div>
        </div>
    )
}
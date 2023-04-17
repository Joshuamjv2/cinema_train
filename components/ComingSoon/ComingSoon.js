import { useState } from "react"
import Image from "next/image"
import Genre from "../Genre"
import Button from "../Button"
import Rating from "../Rating"
import Cast from "../Cast"

import SingleComingSoon from "./SingleComingSoon"


export default function ComingSoon({coming_soon}){
    const slider_style = {
    'backgroundImage':"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/bg/General2.jpg')",
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'bottom',
    // 'height': '100vh',
    "overflow": "hidden"
    }

    const movies = coming_soon
    const [main, setMain] = useState(movies[0])
    const handleClick = (e, key) => {
        for (let i = 0; i < movies.length; i++){
            if (movies[i].id == key){
                setMain(movies[i])
            }
        }
    }

    return(
        <div style={slider_style} className="flex justify-center" id="coming_soon">
        {/* py-8 px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:max-w-screen-2xl */}
            <div className="py-16 px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container">
                <h2 className="text-4xl font-bold text-[#ffc300] py-8 uppercase">Coming Soon</h2>

                {/* Single Coming Soon with details */}
                <div className="flex flex-col gap-0 md:gap-4 lg:gap-12 xl:gap-16 md:flex-row justify-between items-start md:items-end border md:border-none">
                <div>
                    <Image src={`https://image.tmdb.org/t/p/original${main.poster_path}`} width={350} height={100} style={{"objectFit": "fill", "width": "100%", "height": "auto"}}/>
                </div>
                    <div className="p-4 md:p-0 w-full md:w-4/5">
                        <h2 className="uppercase mb-4 font-bold text-4xl">{main.title}</h2>
                        <ul className="flex gap-2 lg:gap-4 mt-4 uppercase text-[#b4b3b6] flex-wrap text-sm md:text-base">
                            {main.genre_ids.map((i)=>
                                <Genre key={i.id} genre={i.name}/>
                            )}
                        </ul>
                        <p className="text-sm font-bold my-2 text-[#ffc300] lg:text-base">Coming: {main.release_date}</p>
                        <p className="text-lg leading-tight max-w-xs md:max-w-xl my-2 lg:mt-4">
                            {main.overview}
                        </p>
                        <ul className="hidden lg:flex gap-6 mt-8">
                            {main.cast.map((main_member)=>{
                                const name_one = main_member.original_name.split(" ")[0]
                                const name_two = main_member.original_name.replace(name_one+"", "")
                                const profile_image = `https://image.tmdb.org/t/p/original${main_member.profile_path}`
                                return <Cast key={main_member.id} image={profile_image} first_name={name_one} last_names={name_two}/>
                                }
                            )}
                        </ul>
                        <div className="flex items-center gap-3 mt-8">
                            <Rating rating={main.adult ? "18+": "PG"}/>
                            <Button text={"Book Tickets"}/>
                        </div>
                    </div>
                </div>

                {/* multiple coming soon to select from */}
                {/* <div className="pb-8 pt-16 mx-auto px-4 md:px-12"> */}
                <ul className="gap-4 md:gap-8 md:grid md:grid-cols-4 lg:grid-cols-6 py-16 hidden">
                    {movies.map((movie) =>
                        <div key={movie.id} style={movie.id == main.id ? {'border': "solid 1px #fff"}: {'border': "none"}}>
                            <SingleComingSoon selected={main.id} image={`https://image.tmdb.org/t/p/original${movie.poster_path}`} image_width={400} image_height={100} title={movie.original_title} handleClick={event => handleClick(event, movie.id)} />
                        </div>
                    )}
                </ul>
                {/* </div> */}

            </div>
        </div>
    )
}
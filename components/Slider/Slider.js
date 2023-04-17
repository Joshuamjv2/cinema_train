import Navigation from "../Layout/Navigation";
import cast_1 from "../../public/images/cast/cast1.jpg"
import cast_2 from "../../public/images/cast/cast2.jpg"
import cast_3 from "../../public/images/cast/cast3.jpg"
import cast_4 from "../../public/images/cast/cast4.jpg"
import cast_5 from "../../public/images/cast/cast5.jpg"
import Button from "../Button";
import Rating from "../Rating";
import Cast from "../Cast";
import Genre from "../Genre";
import { useState } from "react";


export default function Slider({showing}){
    const movies = showing.slice(0, 6)
    const [current, setCurrent] = useState(movies[0])
    // const bg_image = `https://image.tmdb.org/t/p/original${current.backdrop_path}`
    const slider_style = {
    'backgroundImage':`linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original${current.backdrop_path})`,
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'top',
    'height': '100vh',
    "overflow": "hidden"
    }

    return (
        <div className="" style={slider_style}>
                <Navigation />
                <div className="flex h-full items-center">
                    <div className="container flex justify-between">
                        <div>
                            <h1 className="text-4xl md:text-7xl lg:text-5xl font-bold uppercase">{current.original_title}</h1>
                            <ul className="flex gap-2 lg:gap-4 mt-4 uppercase text-[#b4b3b6] flex-wrap text-sm lg:text-base">
                                {current.genre_ids.map((i)=>
                                    <Genre key={i.id} genre={i.name}/>
                                )}
                            </ul>
                            <p className="text-sm font-bold my-2 text-[#ffc300] lg:text-base">Showing from: {current.release_date}</p>
                            <p className="xl:hidden text-md leading-tight max-w-lg my-4 md:text-xl">
                                {current.overview}
                            </p>
                            <div className="flex items-center mt-8 gap-3">
                                <Rating rating={"13+"} />
                                <Button text={"By Tickets"} />
                            </div>
                        </div>
                        <div className="w-3/6 hidden xl:block">
                            <p className="text-lg leading-tight max-w-xl">
                                {current.overview}
                            </p>
                            <h3 className="text-[#ffc300] text-2xl font-medium py-4 uppercase">Cast</h3>
                            <ul className="flex gap-6">
                                {current.cast.map((cast_member)=>{
                                    const name_one = cast_member.original_name.split(" ")[0]
                                    const name_two = cast_member.original_name.replace(name_one+"", "")
                                    const profile_image = `https://image.tmdb.org/t/p/original${cast_member.profile_path}`
                                    return <Cast key={cast_member.id} image={profile_image} first_name={name_one} last_names={name_two}/>
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
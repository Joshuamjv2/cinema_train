import Navigation from "../Layout/Navigation";
import Button from "../Button";
import Rating from "../Rating";
import Cast from "../Cast";
import Genre from "../Genre";
import { useState } from "react";


export default function SingleSlider({data}){
    const current = data
    // const bg_image = `https://image.tmdb.org/t/p/original${current.backdrop_path}`
    const slider_style = {
    'backgroundImage':`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${current.backdrop_path})`,
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'top',
    'height': '100vh',
    "overflow": "hidden"
    }

    return (
            <div className="w-full absolute top-0 bottom-0" style={slider_style}>
                <div className="flex h-full items-center">
                    <div className="px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container flex justify-between">
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
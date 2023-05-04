import { useState } from "react";
import Cast from "../Cast";
import Rating from "../Rating";
import Genre from "../Genre";
import Button from "../Button";
import SingleSliderTwo from "./SingleSliderTwo";



export default function SliderTwo({showing}){
    const [current, setCurrent] = useState(showing[0])

    function handleIndicatorClick(e, key){
        setCurrent(showing[key])
    }
    return (
        <div>
            <SingleSliderTwo data={current}>
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
            </SingleSliderTwo>
            <ul className="absolute right-1/2 md:flex justify-between translate-x-1/2 gap-8 hidden bottom-16 pt-2">
                {showing.map((show, index)=>
                    <li className="cursor-pointer">
                        <div key={index} className="w-3.5 h-3.5 duration-300 border-2 rounded-full border-[#fff] overflow-hidden" style={showing[index] === current ? {background: "#96031a"} : {background: "transparent"}}
                        onClick={e => handleIndicatorClick(e, index)}></div>
                    </li>
                )}
        </ul>
        </div>
    )
}


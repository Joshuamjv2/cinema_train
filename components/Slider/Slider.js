import { useState } from "react";
import SingleSlider from "./SingleSlider";

export default function Slider({showing}){
    const [current, setCurrent] = useState(showing[0])

    function handleIndicatorClick(e, key){
        setCurrent(showing[key])
    }


    return(
    <div className="relative h-screen">
        return <SingleSlider data={current} />
        {/* {showing.map((movie) => {
            return <SingleSlider key={movie.id} data={movie} />
        })} */}
        <ul className="absolute right-1/2 md:flex justify-between translate-x-1/2 gap-8 hidden bottom-16 pt-2">
                {showing.map((show, index)=>
                    <li className="cursor-pointer">
                        <div key={index} className="w-3.5 h-3.5 duration-300 border-2 rounded-full border-[#fff] overflow-hidden" style={showing[index] === current ? {background: "#96031a"} : {background: "transparent"}}
                        onClick={e => handleIndicatorClick(e, index)}></div>
                    </li>
                )}
        </ul>
    </div>)
}
import { useState } from "react";
import SingleSlider from "./SingleSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Slider({showing}){
    const [current, setCurrent] = useState(showing[0])

    console.log(current, "Current")

    function handleIndicatorClick(e, key){
        setCurrent(showing[key])
    }


    return(
    <div className="relative h-screen">
        <SingleSlider data={current} />
        {/* {showing.map((movie) => {
            return <SingleSlider key={movie.id} data={movie} />
        })} */}
        <div className="absolute right-1/2 bottom-14 md:bottom-16 flex translate-x-1/2 items-center gap-4 md:gap-8 pt-2">
            <div className="cursor-pointer" onClick={()=>{showing.indexOf(current) > 0 && setCurrent((oldValue)=>showing[showing.indexOf(oldValue)-1])}}>
                <FontAwesomeIcon className="text-xl md:text-2xl lg:text-3xl" icon={["fas", "angle-left"]} />
            </div>
            <ul className="flex justify-between gap-4 md:gap-8">
                    {showing.map((show, index)=>
                        <li className="cursor-pointer">
                            <div key={index} className="w-2 h-2 md:w-3 md:h-3 duration-300 border-2 rounded-full border-[#fff] overflow-hidden" style={showing[index] === current ? {background: "#96031a"} : {background: "transparent"}}
                            onClick={e => handleIndicatorClick(e, index)}></div>
                        </li>
                    )}
            </ul>
            <div className="cursor-pointer" onClick={()=>{showing.indexOf(current) < showing.length-1 && setCurrent((oldValue)=>showing[showing.indexOf(oldValue)+1])}}>
                <FontAwesomeIcon className="text-xl md:text-2xl lg:text-3xl" icon={["fas", "angle-right"]}/>
            </div>
        </div>
    </div>)
}
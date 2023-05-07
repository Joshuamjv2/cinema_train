import Navigation from "../Layout/Navigation";
import Button from "../Button";
import Rating from "../Rating";
import Cast from "../Cast";
import Genre from "../Genre";
import { useState } from "react";


export default function SingleSliderTwo({data, children}){
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
        <div className="relative bg-black">
            <div className="w-full bg-black">
                {children}
            </div>
        </div>
    )
}

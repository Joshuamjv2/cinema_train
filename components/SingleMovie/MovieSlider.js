import SingleSliderTwo from "../Slider2/SingleSliderTwo"
import Image from "next/image"
import Button from "../Button"
import Rating from "../Rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Genre from "../Genre"

export default function MovieSlider({movie}){
    const slider_style = {
    'backgroundImage':`linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'top',
    // 'height': '100%',
    // "overflow": "hidden"
    }
    const [play, setPlay] = useState(false)

    function handlePlay(){
        setPlay(true)
    }


    return (
    <SingleSliderTwo data={movie}>
        <div className="container">
            <div className="flex justify-between items-center mb-4 mt-24 md:mt-32 lg:mt-40">
                {/* genres */}
                {/* <ul className="flex gap-2">
                    {movie.genres.map((genre)=><Genre key={genre.id} genre={genre.name} />)}
                </ul> */}
                {play ? <div></div> : <div className="gap-2 lg:gap-4 flex items-center">
                    {/* <Rating rating="4/5"/> */}
                    <div className="gap-1 lg:gap-2  items-center text-xl md:text-2xl lg:text-3xl hidden">
                        <FontAwesomeIcon icon={["fas", "star"]} style={{size: "auto", color:"#ffc300"}}/>
                        <FontAwesomeIcon icon={["fas", "star"]} style={{size: "auto", color:"#ffc300"}}/>
                        <FontAwesomeIcon icon={["fas", "star"]} style={{size: "auto", color:"#ffc300"}}/>
                        <FontAwesomeIcon icon={["fas", "star"]} style={{size: "auto", color:"#ffc300"}}/>
                    </div>
                </div>}
            </div>
            {play &&
                <div className="absolute flex w-full h-full z-2 mx-auto">
                    <iframe className="mx-auto h-full w-full" src={`https://www.youtube.com/embed/${movie.trailer.key}?rel=0&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            }
            <div className="lg:flex gap-4 w-full justify-center relative mb-8">

                <div className="w-1/3 xl:block hidden">
                    <Image className="" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={350} height={100} style={{"width": "100%", "height": "auto"}}/>
                </div>
                {/* main section with trailer */}
                <div className="w-full flex items-end hover:duration-200" style={slider_style}>
                    <div className="h-96"></div>
                    <div className="cursor-pointer ml-4 mb-4 md:mb-8 lg:w-3/4 xl:w-2/4">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-2 uppercase text-[#fcc300]">{movie.original_title}</h2>
                        <div className="flex gap-2 items-center">
                            <div className="" onClick={handlePlay}>
                                {
                                    play ? <FontAwesomeIcon icon={["far", "pause-circle"]} style={{fontSize: 45}}/>
                                    : <FontAwesomeIcon icon={["far", "play-circle"]} style={{fontSize: 45}}/>
                                }
                            </div>
                            <p className="text-2xl lg:text-3xl font-bold">Watch Trailer</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* info on movie */}
            <div className="mb-24 md:mb-32 lg:mb-40 flex justify-between items-start">
                <div className="lg:w-1/3">
                    {/* <p className="mb-4 text-xl italic text-[#b4b3b6]">"{movie.tagline}"</p> */}
                    <div className="items-center gap-3 flex">
                        <Rating rating={movie.adult ? "18+": "PG"}/>
                        <Button text={"Buy Tickets"}/>
                    </div>
                </div>
                {play ? <div></div> :<div className="hidden items-center gap-2 border border-[#b4b3b6] text-[#b4b3b6] py-2 px-3 cursor-pointer">
                    <FontAwesomeIcon icon={["fas", "plus"]} style={{fontSize: 25}} />
                    <h6 className="text-xl font-bold">Add your rating</h6>
                </div>}
            </div>
        </div>
    </SingleSliderTwo>)
}
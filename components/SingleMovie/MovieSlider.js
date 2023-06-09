import SingleSliderTwo from "../Slider2/SingleSliderTwo"
import Image from "next/image"
import Button from "../Button"
import Rating from "../Rating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Genre from "../Genre"

export default function MovieSlider({movie}){
    const slider_style = {
    'backgroundImage':`linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
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
        <div className="px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container pt-1">
            <div className="flex justify-between items-start gap-12 mb-4 mt-28 md:mt-32 lg:mt-36">
                {/* movie title */}
                <div className="">
                    <h2 className="hidden text-2xl lg:text-4xl font-bold mb-2 uppercase text-[#fcc300]">{movie.original_title}</h2>
                    <div className="text-[#b4b3b6] flex gap-1 items-center text-base">
                        <FontAwesomeIcon icon={["far", "clock"]} />
                        <h6>{movie.runtime}m</h6>
                    </div>
                </div>
                {/* movie rating */}
                <div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="text-[#fbfffe] text-3xl md:text-2xl hover:text-[#96031a] bg-[#96031a] hover:duration-300 hover:bg-[#ffc300] hidden">
                            <FontAwesomeIcon className="cursor-pointer p-1" icon={["fas", "plus"]} style={{fontSize: "auto"}} />
                        </div>

                        <div>
                            <h3 className="hidden text-base md:text-xl font-bold uppercase">Rating</h3>
                            <div className="flex items-center gap-2 text-base">
                                <FontAwesomeIcon icon={["fas", "chart-line"]} style={{fontSize: "auto", color: "#b4b3b6"}} />
                                <h6 className="font-semibold mr-1 md:mr-2 text-[#b4b3b6]">{movie.vote_average}/10</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="lg:flex gap-4 w-full justify-center relative mb-4 md:mb-8">
                {play &&
                    <div className="absolute flex w-full h-full mx-auto z-10 left-0 top-0 bg-black">
                        <div onClick={()=>setPlay(false)} className="text-xl lg:text-3xl pr-2 cursor-pointer">
                            <FontAwesomeIcon icon={["fas", "close"]} style={{fontSize: "auto"}}/>
                        </div>
                        <iframe className="mx-auto h-full w-full" src={`https://www.youtube.com/embed/${movie.trailer.key}?rel=0&autoplay=1`} title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                }

                <div className="w-1/3 xl:block hidden">
                    <Image className="" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width={350} height={100} style={{"width": "100%", "height": "auto"}}/>
                </div>
                {/* main section with trailer */}
                <div className="w-full flex items-end hover:duration-200" style={slider_style}>
                    <div className="h-96"></div>
                    <div className="cursor-pointer ml-4 mr-4 mb-4 md:ml-4 xl:mb-8 xl:ml-8 md:mb-4 lg:w-full">
                        {/* movie title */}
                        <div className="hidden">
                            <h2 className="text-2xl lg:text-4xl font-bold uppercase text-[#fcc300] mr-4">{movie.original_title}</h2>
                        </div>
                        {/* trailer and tickets on bigger screens. Just trailer on smaller screens */}
                        <div className="flex justify-between">
                            <div className="hidden lg:block">
                                <div className="items-center gap-3 flex">
                                    <Rating rating={movie.adult ? "18+": "PG"}/>
                                    <Button text={"Buy Tickets"}/>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-3xl lg:text-4xl" onClick={handlePlay}>
                                    {
                                        play ? <FontAwesomeIcon icon={["far", "pause-circle"]} style={{fontSize: "auto"}}/>
                                        : <FontAwesomeIcon icon={["far", "play-circle"]} style={{fontSize: "auto"}}/>
                                    }
                                </div>
                                <p className="text-2xl lg:text-3xl font-bold uppercase">Play Trailer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* info on movie */}
            <div className="mb-4 md:w-2/3 lg:w-1/2 leading-normal">
                <ul className="gap-2 mb-2 overflow-x-scroll scrollbar-hide hidden">
                    {movie.genres.map(genre=><Genre key={genre.id} genre={genre.name}/>)}
                </ul>
                <p className="py-2 lg:py-4 hidden">{movie.overview}</p>
            </div>
            <div className="pb-12 md:pb-32 lg:pb-36 flex justify-between items-start">
                <div className="lg:w-1/3 lg:hidden">
                    <div className="items-center gap-3 flex">
                        <Rating rating={movie.adult ? "18+": "PG"}/>
                        <Button text={"Buy Tickets"}/>
                    </div>
                </div>
            </div>
        </div>
    </SingleSliderTwo>)
}

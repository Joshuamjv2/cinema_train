import Image from "next/image"
import cast_1 from "../../../public/images/cast/cast1.jpg"
import cast_2 from "../../../public/images/cast/cast2.jpg"
import cast_3 from "../../../public/images/cast/cast3.jpg"
import cast_4 from "../../../public/images/cast/cast4.jpg"
import cast_5 from "../../../public/images/cast/cast5.jpg"

import Genre from "../Genre"
import Button from "../Button"
import Rating from "../Rating"
import Cast from "../Cast"

import creed from "../../../public/images/showing/creed.jpg"
import john_wick from "../../../public/images/showing/john_wick4.jpg"
import tetris from "../../../public/images/showing/tetris.jpg"
import dungeons_dragons from "../../../public/images/showing/dungeons_dragons.jpg"
import SingleComingSoon from "./SingleComingSoon"


export default function ComingSoon(){
    const slider_style = {
    'backgroundImage':"linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/bg/General2.jpg')",
    'backgroundSize': 'cover',
    'backgroundRepeat': 'no-repeat',
    'backgroundPosition': 'bottom',
    // 'height': '100vh',
    "overflow": "hidden"
    }
    return(
        <div style={slider_style} className="flex max-w-xl md:max-w-7xl lg:max-w-screen-2xl">
            <div className="py-8 px-4 mx-auto md:px-12">
                <h2 className="text-4xl font-bold text-[#ffc300] py-8 uppercase">Coming Soon</h2>

                {/* Single Coming Soon with details */}
                <div className="flex flex-col gap-0 md:gap-4 lg:gap-8 md:flex-row justify-between items-start md:items-end border md:border-none">
                    <Image src={creed} height={600}/>
                    <div className="p-3 w-full md:w-4/5">
                        <h2 className="uppercase mb-4 font-bold text-5xl">Creed iii*</h2>
                        <ul className="hidden md:flex gap-2 lg:gap-4 mt-4 uppercase text-[#b4b3b6] flex-wrap text-sm md:text-base">
                            <Genre genre={"Action"}/>
                            <Genre genre={"Sport"}/>
                            <Genre genre={"Drama"}/>
                            <Genre genre={"Crime"}/>
                        </ul>
                        <p className="text-sm font-bold my-2 text-[#ffc300] lg:text-base">Coming: 24th May, 2023</p>
                        <p className="text-lg leading-tight max-w-xl my-2 lg:mt-4  hidden md:block">
                            Adonis has been thriving in both his career and family life, but when a childhood friend and former boxing prodigy resurfaces, the face-off is more than just a fight.
                        </p>
                        <ul className="hidden lg:flex gap-6 mt-8">
                            <Cast image={cast_1} first_name={"Donovan"} last_names={"Albrighton"}/>
                            <Cast image={cast_2} first_name={"Michael"} last_names={"B Jordan"}/>
                            <Cast image={cast_3} first_name={"Rhoad"} last_names={"Dahl"}/>
                            <Cast image={cast_4} first_name={"Lana"} last_names={"Del Rey"}/>
                            <Cast image={cast_5} first_name={"Tommy"} last_names={"Goldman"}/>
                        </ul>
                        <div className="flex items-center gap-3 mt-8">
                            <Rating rating={"13+"}/>
                            <Button text={"Book Tickets"}/>
                        </div>
                    </div>
                </div>

                {/* multiple coming soon to select from */}
                {/* <div className="pb-8 pt-16 mx-auto px-4 md:px-12"> */}

                <ul className="gap-4 grid md:grid-cols-3 lg:grid-cols-4 py-8">
                    <SingleComingSoon image={creed} image_height={500} />
                    <SingleComingSoon image={tetris} image_height={500} />
                    <SingleComingSoon image={john_wick} image_height={500} />
                    <SingleComingSoon image={dungeons_dragons} image_height={500} />
                </ul>
                {/* </div> */}

            </div>
        </div>
    )
}
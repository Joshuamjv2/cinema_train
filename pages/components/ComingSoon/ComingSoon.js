import Image from "next/image"
import cast_1 from "../../../public/images/cast/cast1.jpg"
import cast_2 from "../../../public/images/cast/cast2.jpg"
import cast_3 from "../../../public/images/cast/cast3.jpg"
import cast_4 from "../../../public/images/cast/cast4.jpg"
import cast_5 from "../../../public/images/cast/cast5.jpg"


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
        <div className="py-8 container" style={slider_style}>
                <h2 className="text-4xl font-bold text-[#ffc300] py-8 uppercase">Coming Soon</h2>

                {/* Single Coming Soon with details */}
                <div className="flex flex-col gap-8 md:flex-row justify-between items-start lg:items-end">
                    <Image src={creed} height={600}/>
                    <div className="text-bold w-4/5">
                        <p className="text-xl text-[#96031a] font-thin  uppercase">Coming: 24th May, 2023</p>
                        <h2 className="uppercase mb-4 font-bold text-5xl">Creed iii*</h2>
                        <ul className="hidden md:flex gap-4 mt-4 uppercase text-[#b4b3b6]">
                            <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Action</li>
                            <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Sport</li>
                            <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Drama</li>
                            <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Crime</li>
                        </ul>
                        <p className="text-lg leading-relaxed mr-48 py-8">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nesciunt reiciendis iste incidunt accusamus excepturi sed autem aperiam rerum consectetur optio nostrum, eligendi, sit ipsam qui temporibus expedita praesentium fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit.  Placeat repudiandae voluptatum earum porro quidem aliquam tempora dolor illo, laborum a soluta consequuntur debitis ad.</p>
                        <ul className="flex gap-6">
                                <li className="">
                                    <div className="h-20 w-20 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_1} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-medium">Donovan <br/> Albrighton</p>
                                </li>
                                <li className="">
                                    <div className="h-20 w-20 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_2} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Michael <br/> B Jordan</p>
                                </li>
                                <li className="">
                                    <div className="h-20 w-20 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_3} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Rhoad <br/> Dahl</p>
                                </li>
                                <li className="">
                                    <div className="h-20 w-20 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_4} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Lanna <br/> Del Ray</p>
                                </li>
                                <li className="">
                                    <div className="h-20 w-20 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_5} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Tommy <br/> Goldman</p>
                                </li>
                            </ul>
                        <div className="flex items-center gap-3 mt-8">
                            <p className="h-14 w-14 rounded-full border text-[#b4b3b6] border-[#b4b3b6] text-center pt-3.5 font-semibold">13+</p>
                                <button className="outline-none bg-[#ffc300] text-md md:text-xl text-[#96031a] p-3 font-semibold rounded-md hover:text-[#ffc300] hover:duration-300 hover:bg-[#96031a] uppercase">Book Tickets</button>
                        </div>
                    </div>
                </div>

                {/* multiple coming soon to select from */}
                <ul className="gap-2  grid md:grid-cols-3 lg:grid-cols-4 py-24">
                    <SingleComingSoon image={creed} height={480} />
                    <SingleComingSoon image={tetris} height={480} />
                    <SingleComingSoon image={john_wick} height={480} />
                    <SingleComingSoon image={dungeons_dragons} height={480} />
                </ul>
        </div>
    )
}
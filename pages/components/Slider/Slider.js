import Layout from "../Layout/Layout";
import Navigation from "../Layout/Navigation";
import cast_1 from "../../../public/images/cast/cast1.jpg"
import cast_2 from "../../../public/images/cast/cast2.jpg"
import cast_3 from "../../../public/images/cast/cast3.jpg"
import cast_4 from "../../../public/images/cast/cast4.jpg"
import cast_5 from "../../../public/images/cast/cast5.jpg"
import Image from "next/image";


export default function Slider(){
    const slider_style = {
    'backgroundImage':"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/bg/creed.jpg')",
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
                            <h1 className="text-5xl md:text-7xl lg:text-6xl font-bold uppercase">Creed iii</h1>
                            <ul className="hidden md:flex gap-4 mt-4 uppercase text-[#b4b3b6]">
                                <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Action</li>
                                <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Sport</li>
                                <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Drama</li>
                                <li className="border border-[#b4b3b6]  py-1 px-4 rounded-md outline-transparent">Crime</li>
                            </ul>
                            <p className="text-md md:text-xl my-2">Showing: 7th May 2022 - 24th May 2022</p>
                            <div className="flex items-center mt-8 gap-3">
                                <p className="h-14 w-14 rounded-full border text-[#b4b3b6] border-[#b4b3b6] text-center pt-3.5 font-semibold">13+</p>
                                <button className="outline-none bg-[#ffc300] text-md md:text-xl text-[#96031a] p-3 font-semibold rounded-md hover:text-[#ffc300] hover:duration-300 hover:bg-[#96031a] uppercase">Buy Tickets</button>
                            </div>
                        </div>
                        <div className="w-3/6 = hidden xl:block">
                            <p className="text-lg leading-relaxed">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima porro odio quos maiores temporibus asperiores cupiditate! Rerum, totam eaque modi libero maiores esse voluptates iure ab rem commodi corporis autem.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita optio debitis illum nihil cumque aperiam repellat?
                            </p>
                            <h3 className="text-[#ffc300] text-3xl font-bold py-4 uppercase">Cast</h3>
                            <ul className="flex gap-6">
                                <li className="">
                                    <div className="h-24 w-24 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_1} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-medium">Donovan <br/> Albrighton</p>
                                </li>
                                <li className="">
                                    <div className="h-24 w-24 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_2} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Michael <br/> B Jordan</p>
                                </li>
                                <li className="">
                                    <div className="h-24 w-24 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_3} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Rhoad <br/> Dahl</p>
                                </li>
                                <li className="">
                                    <div className="h-24 w-24 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_4} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Lanna <br/> Del Ray</p>
                                </li>
                                <li className="">
                                    <div className="h-24 w-24 rounded-full border overflow-hidden border-transparent">
                                        <Image src={cast_5} className="object-cover w-full h-full"/>
                                    </div>
                                    <p className="text-[#b4b3b6] text-center text-sm mt-2 font-bold">Tommy <br/> Goldman</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}
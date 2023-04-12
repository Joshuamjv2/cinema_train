import Image from "next/image";
import logo from "../../../public/images/logos/svg/logo_image_full.svg";
import SingleNavItem from "./SingleNavItem.js/SingleNavItem";
import { useState, useEffect } from "react";

export default function Navigation(){
    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = (clientWindowHeight / 1000);

    if (backgroundTransparacyVar < 1000) {
        setBackgroundTransparacy(backgroundTransparacyVar*0.6);
    }
    }, [clientWindowHeight]);
    return (
        <div className="fixed left-0 right-0 top-0 bg-white" style={{'background': `rgba(0,0,0, ${backgroundTransparacy})`, "zIndex": "22"}}>
            <nav className="flex justify-between px-4 md:px-12 items-center py-4 md:py-4">
                    <Image src={logo} height={40} className="w-auto h-12 cursor-pointer"/>
                    <ul className="gap-8 items-center hidden lg:flex xl:gap-16">
                        <SingleNavItem name={"Home"} />
                        <SingleNavItem name={"Showing"} />
                        <SingleNavItem name={"Coming Soon"} />
                        <SingleNavItem name={"Contact Us"} />
                        <SingleNavItem name={"Sign In"} />
                    </ul>
            </nav>
        </div>
    )
}
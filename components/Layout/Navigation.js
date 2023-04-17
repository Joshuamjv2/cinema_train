import Image from "next/image";
import logo from "../../public/images/logos/svg/logo_image_full.svg";
import SingleNavItem from "./SingleNavItem.js/SingleNavItem";
import { useState, useEffect } from "react";
import Link from "next/link";

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
                    <Link href={"/"}><Image src={logo} height={40} className="w-auto h-12 cursor-pointer"/></Link>
                    <ul className="gap-8 items-center hidden lg:flex xl:gap-16">
                        <SingleNavItem name={"Home"} path={"/"}/>
                        <SingleNavItem name={"Showing"} path={"#now_showing"} />
                        <SingleNavItem name={"Coming Soon"} path={"#coming_soon"} />
                        <SingleNavItem name={"The Community"} path={"#community"} />
                        <SingleNavItem name={"Contact Us"} path={"#contact"} />
                        <SingleNavItem name={"Sign In"} path={"/"} />
                    </ul>
            </nav>
        </div>
    )
}
import Image from "next/image";
import logo from "../../public/images/logos/svg/logo_image_full.svg";
import SingleNavItem from "./SingleNavItem.js/SingleNavItem";
import { useState, useEffect } from "react";
import Link from "next/link";

import UserContext from "@/contextapi/UserContext";
import { useContext } from "react";
import { Contrail_One } from "next/font/google";

export default function Navigation(){

    const [clientWindowHeight, setClientWindowHeight] = useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);

    const {init_login, logout, isAuth, userInfo} = useContext(UserContext)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    const handleLogin = () => {
        init_login()
    }

    const handleLogout = () => {
        logout()
    }

    useEffect(() => {
        let backgroundTransparacyVar = (clientWindowHeight / 1000);

    if (backgroundTransparacyVar < 1000) {
        setBackgroundTransparacy(backgroundTransparacyVar*0.9);
    }
    }, [clientWindowHeight]);

    return (
        <div className="fixed left-0 right-0 top-0 bg-white" style={{'background': `rgba(0,0,0, ${backgroundTransparacy})`, "zIndex": "22"}}>
            <nav className="flex justify-between px-4 md:px-12 items-center py-4 md:py-6">
                    <Link href={"/"}><Image src={logo} height={40} className="w-auto h-12 cursor-pointer"/></Link>
                    <ul className="gap-6 items-center hidden lg:flex xl:gap-16">
                        <SingleNavItem key={"home"} name={"Home"} path={"/"}/>
                        <SingleNavItem key={"showing"} name={"Showing"} path={"/#now_showing"} />
                        <SingleNavItem key={"coming_soon"} name={"Coming Soon"} path={"/#coming_soon"} />
                        {!isAuth && <SingleNavItem key={"community"} name={"The Community"} path={"/#community"} />}
                        <SingleNavItem name={"Contact Us"} path={"/#contact"} />
                        {!isAuth ? 
                        <div onClick={handleLogin}>
                            <SingleNavItem key={"sing_in"} name={"Sign In"} path={"/"}/>
                        </div>
                        :
                        <div onClick={handleLogout} key={"user"}>
                            <div className="border-transparent rounded-full overflow-hidden hover:scale-110 hover:duration-200">
                                <Image src={userInfo.picture} height={45} width={45} />
                            </div>
                            {/* <SingleNavItem name={"Logout"} path={"/"}/> */}
                        </div>
                        }
                    </ul>
            </nav>
        </div>
    )
}
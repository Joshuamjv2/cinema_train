import Image from "next/image";
import logo from "../../../public/images/logos/svg/logo_image_full.svg";
import SingleNavItem from "./SingleNavItem.js/SingleNavItem";

export default function Navigation(){
    return (
        <div className="bg-transparent relative">
            <nav className="">
                <div className="bg-[#96031a] justify-between text-[#ffc300] py-2 px-4 items-center hidden font-semibold">
                    <p className="cursor-pointer">Email: joshuamjv22@gmail.com</p>
                    <div className="flex gap-24">
                        <p className="cursor-pointer">Phone: +256758438885</p>
                        <ul className="flex justify-between gap-6 items-center">
                            <li>Twit</li>
                            <li>Insta</li>
                            <li>Face</li>
                            <li>Link</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between px-4 md:px-12 items-center py-4 md:py-4 fixed left-0 right-0">
                    <Image src={logo} height={40} className="w-auto h-12 cursor-pointer"/>
                    <ul className="gap-8 items-center hidden lg:flex xl:gap-16">
                        <SingleNavItem name={"Home"} />
                        <SingleNavItem name={"Showing"} />
                        <SingleNavItem name={"Coming Soon"} />
                        <SingleNavItem name={"Contact Us"} />
                        <SingleNavItem name={"Sign In"} />
                    </ul>
                </div>
            </nav>
        </div>
    )
}
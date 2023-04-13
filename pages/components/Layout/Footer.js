import Image from "next/image"
import community from "../../../public/images/general/community.jpg"
import Button from "../Button"

export default function Footer(){
    return(
        <div className="flex bg-[#fbfffe] text-[#000]">
            <div className="pt-16 px-4 mx-auto md:px-12 max-w-xl md:max-w-7xl lg:container">
            <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="hidden md:block">
                        <Image src={community} height={500} className="rounded-lg"/>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#ffc300] pb-4 uppercase">Join The community</h2>
                        <p className="max-w-2xl pb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia similique nam consequuntur illum veritatis distinctio! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, a.<br/><br /> Qui rem laborum asperiores repudiandae, nemo recusandae impedit dolorum! Velit officiis commodi maxime vitae? Perferendis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eligendi. Eligendi, rem odit doloremque dolores animi alias in aliquid unde atque, id error sed, quibusdam rerum exercitationem molestiae quo laudantium.</p>
                        <Button text={"Join the community"}/>
                    </div>
                </div>
                {/* <hr className="my-16" /> */}
                <ul className="flex pt-16 justify-between flex-col md:flex-row gap-8">
                    <li>
                        <h4 className="text-lg font-semibold uppercase text-[#96031a] pb-2">
                            Wanna Contact Us?
                        </h4>
                        <p className="font-thin">You can reach us by phone or email</p>
                        <p className="font-thin">Phone: <span className="text-lg font-semibold text-[#ffc300]">+(256) 758 438885</span></p>
                        <p className="font-thin">Email: <span className="text-lg font-semibold text-[#ffc300]">joshuamjv22@gmail.com</span></p>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold pb-2 uppercase text-[#96031a]">
                            Navigation
                        </h4>
                        <ul className="text-md font-thin gap-3 flex flex-col">
                            <li className="cursor-pointer hover:text-[#ffc300] duration-300">Home</li>
                            <li className="cursor-pointer hover:text-[#ffc300] duration-300">Showing</li>
                            <li className="cursor-pointer hover:text-[#ffc300] duration-300">Coming soon</li>
                            <li className="cursor-pointer hover:text-[#ffc300] duration-300">Contact us</li>
                        </ul>
                    </li>
                    <li>
                        <h4 className="text-lg font-semibold pb-2 uppercase text-[#96031a]">
                            Follow Us
                        </h4>
                        <p className="pb-8">Socials coming soon</p>
                        <Button text={"Sign In"}/>
                    </li>
                </ul>
                <hr className="mt-16" />
                <div className="py-8 md:text-center">
                    <p>&copy; {new Date().getFullYear()} <span className="font-semibold text-[#96031a]">Muwanguzi Joshua</span></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
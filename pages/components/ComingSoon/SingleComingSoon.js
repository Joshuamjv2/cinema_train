import Image from "next/image"
export default function SingleComingSoon({image, height}){
    return(
        <li className="cursor-pointer">
            <Image src={image} height={height} className="object-cover border border-transparent hover:duration-300 w-full"/>
        </li>
    )
}
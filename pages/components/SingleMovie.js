import Image from "next/image"
export default function SingleMovie({image, height}){
    return(
        <li className="cursor-pointer">
            <Image src={image} height={height} className="object-cover border hover:border-[#ffc300] hover:scale-105 hover:duration-300 w-full"/>
        </li>
    )
}
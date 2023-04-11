import Image from "next/image"
export default function SingleMovie({image, image_height}){
    return(
        <li className="cursor-pointer flex">
            <Image src={image} height={image_height} className="object-cover border hover:border-[#ffc300] md:hover:scale-105 hover:duration-300 w-full"/>
        </li>
    )
}
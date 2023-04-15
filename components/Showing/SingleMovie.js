import Image from "next/image"
export default function SingleMovie({image, image_height, image_width}){
    return(
        <li className="cursor-pointer flex">
            <Image src={image} height={image_height} width={image_width} className="object-cover border border-transparent hover:border-[#fff] md:hover:scale-105 hover:duration-300 w-full"/>
        </li>
    )
}
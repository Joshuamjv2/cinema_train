import Image from "next/image"
export default function SingleComingSoon({image, image_height}){
    return(
        <li className="cursor-pointer flex">
            <Image src={image} height={image_height} className="object-cover w-full"/>
        </li>
    )
}
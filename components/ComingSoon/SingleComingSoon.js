import Image from "next/image"
export default function SingleComingSoon({image, image_height, image_width, title, handleClick}){
    return(
        <li onClick={handleClick} className="hover:cursor-pointer">
            <Image src={image} height={image_height} width={image_width} alt={title}/>
        </li>
    )
}
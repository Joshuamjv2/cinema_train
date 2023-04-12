import Image from "next/image"

export default function SingleGallery({image}){
    return (
        <div className="">
            <Image src={image} height={400} className="object-cover block border"/>
        </div>
    )
}
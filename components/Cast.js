import Image from "next/image"
export default function Cast({image, first_name, last_names}){
    return(
        <li className="">
            <div className="w-20 h-20 rounded-full border overflow-hidden border-transparent">
                <Image src={image} alt={`${first_name} ${last_names}`} width={100} height={100} className="object-cover w-full h-full"/>
            </div>
            <p className="text-[#b4b3b6] text-center text-sm mt-2 font-medium">{first_name} <br/> {last_names}</p>
        </li>
    )
}
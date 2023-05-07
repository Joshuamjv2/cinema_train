import Image from "next/image";
import cast1 from "../../../public/images/cast/cast6.webp"

export default function SingleCredit({credit}){
    let cast;
    if (!credit.profile_path){
        cast = cast1
    } else {
        cast = `https://image.tmdb.org/t/p/original${credit.profile_path}`
    }
    return(
        <div className="flex flex-col my-4">
            <div className="h-64 w-52">
                <Image className="w-full h-full object-cover" src={cast} width={250} height={100} />
            </div>
            <div className="mt-2">
                <h3 className="font-bold text-xl">{credit.name}</h3>
                <h3 className="text-md">{credit.character}</h3>
            </div>
        </div>
    )
}

// export default function SingleCredit({credit}){
//     <li className="">
//         <div className="w-20 h-20 rounded-full border overflow-hidden border-transparent">
//             <Image src={`https://image.tmdb.org/t/p/original${credit.profile_path}`} alt={`${credit.name}`} width={100} height={100} className="object-cover w-full h-full"/>
//         </div>
//         <p className="text-[#b4b3b6] text-center text-sm mt-2 font-medium">{credit.name}</p>
//     </li>
// }
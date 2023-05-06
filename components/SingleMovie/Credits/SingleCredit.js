import Image from "next/image";

export default function SingleCredit({credit}){
    return(
        <div className="flex flex-col py-4">
            <div className="w-48 h-60">
                <Image className="w-full h-full" src={`https://image.tmdb.org/t/p/original${credit.profile_path}`} width={140} height={100} />
            </div>
            <div className="mt-2 lg:w-1/2">
                <h3 className="font-bold text-xl">{credit.name}</h3>
                <h3 className="text-md">{credit.character}</h3>
            </div>
        </div>
    )
}
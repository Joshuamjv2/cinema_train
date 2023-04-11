export default function Rating({rating}){
    return (
        <div className="h-12 w-12 rounded-full border text-[#b4b3b6] border-[#b4b3b6] text-center font-semibold flex justify-center items-center">
            <p>{rating}</p>
        </div>
    )
}
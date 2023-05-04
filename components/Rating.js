export default function Rating({rating, size}){
    return (
        <div className="rounded-full border text-[#b4b3b6] border-[#b4b3b6] text-center font-semibold flex justify-center items-center h-12 w-12">
            <p>{rating}</p>
        </div>
    )
}
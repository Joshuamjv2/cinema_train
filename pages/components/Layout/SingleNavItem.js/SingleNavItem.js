export default function SingleNavItem({name}){
    return (
        <li className="hover:text-[#ffc300] text-[#fbfffe] cursor-pointer last:text-[#96031a] last:p-3 last:bg-[#ffc300] last:rounded-md last:hover:bg-[#96031a] hover:duration-300 last:font-semibold last:uppercase">{name}</li>
    )
}
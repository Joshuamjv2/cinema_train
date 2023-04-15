export default function SingleNavItem({name}){
    return (
        <li className="hover:text-[#ffc300] text-[#fbfffe] cursor-pointer last:p-3 last:hover:text-[#96031a] last:bg-[#96031a] last:rounded-md last:hover:bg-[#ffc300] hover:duration-300 last:font-semibold uppercase">{name}</li>
    )
}
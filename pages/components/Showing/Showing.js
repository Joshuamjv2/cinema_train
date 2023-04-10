import SingleMovie from "../SingleMovie"
import creed from "../../../public/images/showing/creed.jpg"
import john_wick from "../../../public/images/showing/john_wick4.jpg"
import tetris from "../../../public/images/showing/tetris.jpg"
import dungeons_dragons from "../../../public/images/showing/dungeons_dragons.jpg"

export default function Showing(){
    return(
        <div className="flex max-w-xl md:max-w-7xl lg:max-w-screen-2xl">
            <div className="py-8 mx-auto px-4 md:px-12">
                <h2 className="text-4xl font-bold text-[#ffc300] py-8 uppercase">Now Showing</h2>
                    <ul className="gap-4 grid md:grid-cols-3 lg:grid-cols-4 pb-8">
                        <SingleMovie image={creed} height={500} />
                        <SingleMovie image={tetris} height={500} />
                        <SingleMovie image={john_wick} height={500} />
                        <SingleMovie image={dungeons_dragons} height={500} />
                    </ul>
            </div>
        </div>
    )
}
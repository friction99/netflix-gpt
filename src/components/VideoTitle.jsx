const VideoTitle = ({title,desc})=>{
    return (
        <div className="w-screen aspect-video bg-gradient-to-r p-52 from-black absolute text-white">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="my-5 w-1/4">{desc}</p>
            <div>
                <button className="px-10 py-4 bg-white text-black  rounded-lg opacity-4">PLAY</button>
                <button className="px-10 py-4 bg-gray-500 mx-4 text-white  rounded-lg opacity-4">MORE INFO</button>
            </div>
        </div>
    )
}
export default VideoTitle;
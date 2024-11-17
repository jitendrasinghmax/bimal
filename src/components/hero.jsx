import Ajay from '../assets/image 1.png'
const Hero = () => {
    return (<>
        <div className="flex flex-col justify-center items-center gap-1 sm:gap-3 mt-10">
            <div className="flex gap-4">
                <div className="text-3xl sm:text-6xl font-extrabold text-orange-950">Zuban</div>
                <div className="text-3xl sm:text-6xl font-extrabold text-white">Canceri</div>
            </div>
            <div className="text-sm sm:text-xl font-semibold">More you sooner you Die.</div>
            <button className="bg-white p-2 text-orange-900 rounded-lg font-semibold">Die Now</button>
            <img src={Ajay} className='w-[588px]'></img>
        </div>
    </>)
}
export default Hero;
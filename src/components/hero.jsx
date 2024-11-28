import { useNavigate } from 'react-router-dom';
import Ajay from '../assets/image 1.png'
const Hero = () => {
    const navigate=useNavigate();
    return (<>
        <div className="flex flex-col justify-center items-center gap-1 sm:gap-3 mt-10">
            <div className="flex gap-2">
                <div className="text-3xl sm:text-6xl font-extrabold text-orange-950">Zuban</div>
                <div className="text-3xl sm:text-6xl font-extrabold text-white">Canceri</div>
            </div>
            <div className="text-xs sm:text-md font-semibold">More You Eat, Sooner You Die.</div>
            <button onClick={()=>navigate('/mycart')}  className="bg-white p-2 text-orange-900 rounded-lg font-semibold">Die Now</button>
            <img src={Ajay} className='w-[588px]'></img>
        </div>
    </>)
}
export default Hero;
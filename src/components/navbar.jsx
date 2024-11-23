import { useNavigate } from "react-router-dom";
import Mycart from "./icon/mycart";

const Navbar=()=>{
    const navigate=useNavigate();
    return(<>
        <div className="flex justify-between sticky top-0 bg-transparentbackdrop-blur-sm  px-4 py-2 sm:px-10 pt-2 sm:pt-5">
            <div onClick={()=>navigate('/')} className="font-bold text-2xl text-orange-500">Bimal</div>
            <div className="flex gap-4 h-fi">
                <button className="text-orange-950 mt-2 pb-2"><Mycart/></button>
                <button onClick={()=>navigate('/mycart')} className="bg-orange-500 text-sm sm:text-lg text-white px-2 rounded-md py-2">Die Now</button>
            </div>
        </div>
    </>)
}
export default Navbar;
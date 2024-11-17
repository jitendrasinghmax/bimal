import Mycart from "./icon/mycart";

const Navbar=()=>{
    return(<>
        <div className="flex justify-between px-4 sm:px-10 pt-2 sm:pt-5">
            <div className="font-bold text-2xl text-orange-500">Bimal</div>
            <div className="flex gap-4 h-fi">
                <button className="text-orange-950 mt-2 pb-2"><Mycart/></button>
                <button className="bg-orange-500 text-sm sm:text-lg text-white px-2 rounded-md py-2">Die Now</button>
            </div>
        </div>
    </>)
}
export default Navbar;
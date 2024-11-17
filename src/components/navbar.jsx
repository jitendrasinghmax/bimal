const Navbar=()=>{
    return(<>
        <div className="flex justify-between px-10 pt-5">
            <div className="font-bold text-2xl text-orange-500">Bimal</div>
            <div className="flex gap-4 h-fi">
                <div className="text-orange-950  mt-2 hidden sm:block">Home</div>
                <div className="text-orange-950 mt-2 hidden sm:block">Contact</div>
                <div className="text-orange-950 mt-2 hidden sm:block">About</div>
                <button className="bg-orange-500 text-sm sm:text-lg text-white px-2 rounded-md py-2">Die Now</button>
            </div>
        </div>
    </>)
}
export default Navbar;
import { useRecoilValue } from "recoil"
import { dieNowAtom } from "../store/atom"

export const Popup=()=>{
    const popup=useRecoilValue(dieNowAtom);
    return(<>
    {popup&&<div className="h-1/2 w-1/2  absolute z-20  backdrop-blur-md flex flex-col justify-center items-center">
        <p className="text-5xl font-extrabold text-orange-500">BHI apne APPko</p>
        <p className="text-xl font-extrabold text-orange-800">AJAY DEVGAN</p>
        <p className="text-5xl font-extrabold text-orange-500">mat samjho</p>
        <p className="text-5xl font-extrabold text-orange-800">bohat jald hiii</p>
        <p className="text-5xl font-extrabold text-orange-500">MARJAOGE!!!!</p>
        </div>}
    </>)
}
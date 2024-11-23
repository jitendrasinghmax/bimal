import { useRecoilValue } from "recoil"
import { cartAtom } from "../../store/atom"

import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default () => {
    const cartItem = useRecoilValue(cartAtom);
    const navigate = useNavigate();
    return (<>
        <div onClick={() => navigate('/mycart')}>
            <span className="flex">
                <CiShoppingCart className="text-white w-8 h-8" />
                <p className="relative right-[18px] text-xs top-2 text-white">{cartItem.length}</p>
            </span>
        </div>
    </>)
}
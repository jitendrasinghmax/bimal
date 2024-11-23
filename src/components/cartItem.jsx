import { useRecoilState } from 'recoil';
import img from '../assets/image 3.png'
import { cartAtom } from '../store/atom';
import { MdDelete } from "react-icons/md";
export const CartItem = ({ product_obj }) => {

    const [items, setItem] = useRecoilState(cartAtom);

    const handleIncrease = () => setItem((prev) => prev.map((item) => item.id == product_obj.id ? { ...item, quantity: item.quantity + 1 } : item))
    const remove=()=>setItem((prev)=>prev.filter((item)=>item.id!=product_obj.id));
    console.log(items)
    const product = {
        name: "Spiced Mint Candleaf®",
        price: 5,
        image: img, // Replace with actual product image URL
    };

    return (
        <>


            {/* Product Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center mt-4 ">
                <div className="flex items-center space-x-4 bg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded"
                    />
                    <div>
                        <div className="font-semibold">BIMAL</div>
                       <button onClick={remove}  className='w-fit rounded-md px-1 bg-orange-200'>
                       <p>Remove</p>
                       </button>

                    </div>
                    <div className="flex-1 text-center">Rs.{product.price}</div>
                    <div className="w-fit flex items-center border border-orange-500 rounded">
                        <button
                            // onClick={handleDecrease}
                            className="px-2 py-1 text-green-600 font-semibold"
                        >
                            -
                        </button>
                        <span className="px-4">{product_obj.quantity}</span>
                        <button
                            onClick={handleIncrease}
                            className="px-2 py-1 text-green-600 font-semibold"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2'>

                    <div className="flex ml-auto  text-right">

                    </div>
                    <div className="text-right ">Rs.{product.price * product_obj.quantity}</div>
                </div>
            </div>

        </>
    )
}
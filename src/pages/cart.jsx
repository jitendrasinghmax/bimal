import React, { useState } from "react";
import img from '../assets/image 3.png'
import { CartItem } from "../components/cartItem";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../store/atom";

const Cart = () => {
  const items=useRecoilValue(cartAtom);

  const totalPrice =items.reduce((accumulator,item)=>accumulator+item.quantity*5,0);
 console.log(totalPrice)
  return (
    <div className="min-h-screen p-6">
      

      {/* Cart Section */}
      <div className="bg-white text-orange-800 shadow-md rounded-lg p-6">
        <h2 className="text-xl  font-bold mb-4">Your cart items</h2>
        <div className="border-t border-gray-200 py-4">

          {/* Product Row */}
          {items.map((item)=><CartItem product_obj={item}/>)}
        </div>

        {/* Subtotal Section */}
        <div className="border-t border-gray-200 mt-6 pt-6 flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            Tax and shipping cost will be calculated later
          </div>
          <div className="text-right">
            <div className="font-bold text-lg">Rs.{totalPrice}</div>
            <button className="mt-4 w-32 h-10 bg-orange-500 text-white rounded shadow">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

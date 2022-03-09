import React from "react";
import { useGellary } from "../contexts/gellary-context";

const CartList = () => {
  const { cartItems, removeCart } = useGellary();
  console.log(
    "🚀 ~ file: CartList.js ~ line 6 ~ CartList ~ removeCart",
    removeCart
  );

  return (
    <div className="py-10 px-5 flex flex-col gap-5 items-start">
      {cartItems &&
        cartItems.length > 0 &&
        cartItems.map((item, index) => (
          <div
            className="inline-flex justify-between gap-x-5 items-center"
            key={item.id}
          >
            <img
              src={item.url}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <button
              className="bg-red-500 p-3 rounded-lg text-white"
              onClick={() => removeCart(item.id)}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;

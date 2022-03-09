import React from "react";
import { useGellary } from "../contexts/gellary-context";

const CartList = () => {
  const { cartItems } = useGellary();
  return (
    <div className="py-10 px-5 flex flex-col gap-x-3">
      {cartItems &&
        cartItems.length &&
        cartItems.map((item, inde) => (
          <div
            className="inline-flex justify-between gap-x-5 items-center"
            key={item.id}
          >
            <img src={item.url} alt="" />
            <button className="bg-red-500 p-3 rounded-lg text-white">
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;

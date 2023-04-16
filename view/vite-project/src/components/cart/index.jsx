import { useSelector, useDispatch } from "react-redux";
import { removeItems, clearCart, updateItemQuantity } from "./cartSlice";

import { BiArrowBack } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityChange = (newQuantity) => {
    // Chamar a ação para atualizar a quantidade do item no carrinho
    dispatch(updateItemQuantity({ id: cartItems.id, quantity: newQuantity }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] text-[#8B96A5]">
        <p className=" text-center text-[2rem] pb-[1rem]">
          No items in your cart
        </p>
        <MdOutlineRemoveShoppingCart size={90} />
        <Link
          to="/"
          className="mt-[1rem] max-w-[9.93rem] flex items-center gap-[0.87rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white py-[.68rem] px-[.87rem] rounded-md hover:opacity-90 transition-opacity"
        >
          <BiArrowBack /> Back to shop
        </Link>
      </div>
    );
  }

  console.log(cartItems);

  return (
    <section className="pb-16">
      <h2 className="w-[90%] mx-auto font-semibold text-[1.5rem] my-[1.8rem]">
        My cart ({cartItems.length})
      </h2>
      <div className="w-[90%] mx-auto flex">
        <div className="max-w-[55rem] border-[1px] rounded-md px-[1.43rem] bg-white flex-1">
          {cartItems.map((item, index) => {
            return (
              <div
                className="max-w-[52.5rem] flex items-start pb-[1.25rem] border-b-[1px] pt-[1.25rem]"
                key={index}
              >
                <div>
                  <img
                    className="w-[100%] max-w-[5rem] mr-[.62rem]"
                    src={item.img}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="mt-[.37rem] text-[#8B96A5] mb-[.62rem] pr-[2rem] max-w-[26.81rem]">
                    {item.description}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="py-[.43rem] px-[.62rem] border-[1px] rounded-md shadow-sm text-[#FA3434]"
                  >
                    Remove
                  </button>
                </div>
                <div>
                  <p className="font-medium text-right">${item.price}</p>
                  <div className="select-container shadow-sm">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(parseInt(e.target.value))
                      }
                      
                      className=""
                    >
                      {/* Renderizar opções para a quantidade do item */}
                      {Array.from({ length: 10 }, (_, index) => (
                        <option key={index} value={index + 1}>
                          Qty: {index + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="py-[1.25rem] flex items-center justify-between">
            <Link
              to="/"
              className="max-w-[9.93rem] flex items-center gap-[0.87rem] bg-gradient-to-b from-[#127FFF] to-[#0067FF] text-white py-[.68rem] px-[.87rem] rounded-md transition-opacity hover:opacity-90"
            >
              <BiArrowBack /> Back to shop
            </Link>
            <button
              onClick={handleClearCart}
              className="py-[.68rem] px-[.87rem] rounded-md text-[#0D6EFD] border-[1px] shadow-sm"
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="bg">
          <div>
            <div>
              <p>Subtotal:</p>
              <span>$3847.98</span>
            </div>
            <div>
              <p>Discount:</p>
              <span>- $0,00</span>
            </div>
          </div>
          <div>
            <div>
              <p>Total:</p>
              <span>$1357.97</span>
            </div>

            <div>
              <Link>Checkout</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

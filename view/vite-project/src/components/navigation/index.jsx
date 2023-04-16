import profile from "../../assets/Vector.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

export default function Navigation() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);

  return (
    <nav className="flex items-center mr-[5rem] gap-[1.12rem]">
      <Link to='/shopping-cart' className="flex flex-col justify-center items-center relative">
        <img src={cart} className="w-[1.25rem]" />
        <p className="text-xs text-[#8B96A5] pt-[0.43rem]">My Cart</p>
        {cartItem.length > 0 && (
          <p className="w-[1.2rem] h-[1.2rem] flex justify-center items-center bg-orange-500 text-white rounded-[50%] text-sm absolute bottom-8 right-1">
            {cartItem.length}
          </p>
        )}
      </Link>
      <Link to="/sign-in" className="flex flex-col justify-center items-center">
        <img src={profile} className="w-[1.25rem]" />
        <p className="text-xs text-[#8B96A5] pt-[0.43rem]">Profile</p>
      </Link>
    </nav>
  );
}

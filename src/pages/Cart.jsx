import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CartComp from "../components/CartComp";

const Cart = () => {
  const [cartTitles, setCartTitles] = useState([
    "Product",
    "Price",
    "Quantity",
    "Subtotal",
  ]);
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/path/to/lcd-monitor.jpg",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/path/to/gamepad.jpg",
    },
  ];
  return (
    <>
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-[135px]">
        <Breadcrumb />
        <CartComp
          cartTitles={cartTitles}
          cartItems={cartItems}
          onUpdateCart={(quantities) =>
            console.log("Updated quantities:", quantities)
          }
          onReturnToShop={() => console.log("Return to shop")}
        />
      </div>
    </>
  );
};

export default Cart;

import React, { useState } from "react";

const CartComp = ({ cartTitles, cartItems, onUpdateCart, onReturnToShop }) => {
  const [quantities, setQuantities] = useState(
    cartItems
      ? cartItems.reduce(
          (acc, item) => ({
            ...acc,
            [item.id]: item.quantity,
          }),
          {}
        )
      : {}
  );

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setQuantities((prev) => ({
      ...prev,
      [itemId]: newQuantity,
    }));
  };

  const handleRemoveItem = (itemId) => {
    // Remove item logic here
    console.log("Remove item:", itemId);
  };

  // If only titles are provided, render header
  if (cartTitles && !cartItems) {
    return (
      <div className="my-[100px]">
        <div className="w-full px-10 py-6 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-4 gap-4 items-center">
            {cartTitles.map((title, index) => (
              <p
                key={index}
                className={`text-black text-[16px] font-[400] font-poppins ${
                  index === 0
                    ? ""
                    : index === 1
                    ? "text-center"
                    : index === 2
                    ? "text-center"
                    : "text-right"
                }`}
              >
                {title}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // If cart items are provided, render items
  if (cartItems) {
    return (
      <>
        <div className="flex flex-col gap-20 ">
          <div className="my-[20px]">
            {/* Header */}
            <div className="w-full px-10 py-6 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] mb-4">
              <div className="grid grid-cols-4 gap-4 items-center">
                {cartTitles.map((title, index) => (
                  <p
                    key={index}
                    className={`text-black text-[16px] font-[400] font-poppins ${
                      index === 0
                        ? ""
                        : index === 1
                        ? "text-center"
                        : index === 2
                        ? "text-center"
                        : "text-right"
                    }`}
                  >
                    {title}
                  </p>
                ))}
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full px-10 py-6 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]"
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm hover:bg-red-600 transition-colors"
                      >
                        ×
                      </button>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span className="text-black text-[16px] font-[400] font-poppins">
                        {item.name}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      <span className="text-black text-[16px] font-[400] font-poppins">
                        ${item.price}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex justify-center">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              quantities[item.id] - 1
                            )
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={String(quantities[item.id]).padStart(2, "0")}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            handleQuantityChange(item.id, value);
                          }}
                          className="w-12 text-center py-1 border-x border-gray-300 focus:outline-none"
                        />
                        <button
                          onClick={() =>
                            handleQuantityChange(
                              item.id,
                              quantities[item.id] + 1
                            )
                          }
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <span className="text-black text-[16px] font-[400] font-poppins">
                        ${(item.price * quantities[item.id]).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={onReturnToShop}
                className="px-8 py-3 border border-gray-300 text-black text-[16px] font-[400] font-poppins hover:bg-gray-50 transition-colors rounded"
              >
                Return To Shop
              </button>
              <button
                onClick={() => onUpdateCart(quantities)}
                className="px-8 py-3 border border-gray-300 text-black text-[16px] font-[400] font-poppins hover:bg-gray-50 transition-colors rounded"
              >
                Update Cart
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start mb-28">
            <div>
              <form action="" className="flex flex-wrap items-center gap-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="pt-[14px] pr-[164px] pb-[14px] pl-[24px] border-[1px] rounded-[4px] border-black outline-0"
                />
                <button
                  type="submit"
                  className="flex justify-center items-center rounded-[4px] font-poppins text-[16px] font-[500] px-12 py-4 cursor-pointer text-white bg-[#DB4444] hover:bg-[#c33b3b] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Apply Coupon
                </button>
              </form>
            </div>
            <div className="border w-[470px] flex flex-col gap-6 border-black rounded-[4px] p-6">
              <div>
                <h2 className="font-poppins text-black text-[20px] font-[500]">
                  Cart Total
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="flex mb-4 justify-between items-center">
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      Subtotal:
                    </p>
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      $743
                    </p>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="flex mb-4 justify-between items-center">
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      Shipping:
                    </p>
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      Free
                    </p>
                  </div>
                  <hr />
                </div>
                <div>
                  <div className="flex mb-4 justify-between items-center">
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      Total:
                    </p>
                    <p className="text-black text-[16px] font-poppins font-[400]">
                      $743
                    </p>
                  </div>
                  {/* <hr /> */}
                </div>
              </div>
              <button className="flex justify-center items-center rounded-[4px] font-poppins text-[16px] font-[500] px-12 py-4 cursor-pointer text-white bg-[#DB4444] hover:bg-[#c33b3b] transition-colors duration-300">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default CartComp;

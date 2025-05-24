import React from "react";
import icon1 from "../assets/New folder/Services.png";
import icon2 from "../assets/New folder/Services1.png";
import icon3 from "../assets/New folder/Services2.png";
import icon4 from "../assets/New folder/Services3.png";
export const Status = () => {
  const statusData = [
    {
      id: 1,
      icon: icon1,
      title: "10.5k",
      subTitle: "Sallers active our site",
    },
    {
      id: 1,
      icon: icon4,
      title: "33k",
      subTitle: "Mopnthly Produduct Sale",
    },
    {
      id: 1,
      icon: icon2,
      title: "45.5k",
      subTitle: "Customer active in our site",
    },
    {
      id: 1,
      icon: icon3,
      title: "25k",
      subTitle: "Anual gross sale in our site",
    },
  ];
  return (
    <>
      <div className="">
        <div className="py-20">
          <div className="flex justify-center  items-center flex-wrap gap-8">
            {statusData.map((category, index) => (
              <div
                key={index}
                className={`flex justify-center max-w-[170px] max-h-[145px] items-center px-14 py-6 border-[1px] border-[rgba(0, 0, 0, 0.30] rounded-[4px] cursor-pointer transition duration-300 ease-in-out text-white hover:bg-[#DB4444] hover:text-white `}
              >
                <div className="flex justify-center flex-col gap-4 items-center">
                  <img className="w-[56px]" src={category.icon} alt="" />
                  <h2 className="text-lg font-semibold">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

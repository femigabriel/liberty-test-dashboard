import React from "react";
// import styles from "../../styles/dashboard.module.css";
import Eyesicons from "../svgs/EyesIcon";
const slide2 = "./icons/slides-2.svg";
const slide1 = "./icons/slides-1.svg";
const slide3 = "./icons/slides-3.svg";
const forwardarrowIcon = "./icons/forwardArrowIcon.svg";

export const UserSavingsDetails = () => {
  const savingDetails = [
    {
      id: 1,
      title: "Total Savings balance",
      amount: "₦50,000.00",
    },
    {
      id: 2,
      title: "Total Customers",
      amount: "919",
    },
    {
      id: 3,
      title: "Total POS",
      amount: "0",
    },
  ];
  return (
    <div className="flex gap-3 card ">
      <WalletBalanceCard />
      {savingDetails?.map((list: any, index) => {
        return (
          <div key={index} className="savings_card">
            <div className="px-2 py-5 bg-[#F6FAFF] rounded-[10px]">
              <p>{list.title}</p>
              <h3 className="mt-5">{list.amount}</h3>
            </div>
            <div className="mt-3 flex cursor-pointer">
              <span className="">View details</span>
              <img
                src="./assets/icons/forwardArrowIcon.svg"
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export const WalletBalanceCard = () => {
  return (
    <>
      <div className="wallet_card">
        <div className="flex sliders">
          <img
            src="./assets/icons/slides-2.svg"
            alt="slides-1"
            className="s relative left-[30px] bottom-[15px]"
          />
          <img
            src="./assets/icons/slides-3.svg"
            className=" relative left-[25px] bottom-[6px]"
            alt=""
          />
          <img
            src="./assets/icons/slides-1.svg"
            className="relative left-[-50px] bottom-[-2px] "
            alt=""
          />
             <img
            src="./assets/icons/slides-4.svg"
            className="slide-4	"
            alt=""
          />
        </div>
        <div className="relative bottom-[20px]">
          <p className="">Wallet Balence</p>
          <div className="flex">
            <h3 className="mr-3">₦50,000.00</h3>
            <Eyesicons />
          </div>
          <div className="flex gap-3 mt-4">
            <button>Add fund</button>
            <button>Withdraw</button>
          </div>
        </div>
      </div>
    </>
  );
};

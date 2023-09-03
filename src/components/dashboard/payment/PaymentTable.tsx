import React, { useState } from "react";
import { paymentHistory } from "../../services/paymentHistory";
import { ResponseFetchPaymentHistory } from "../../services/Services";
import { CreateInvoice } from "./CreateInvoice";

interface Props {
  onNextClick: () => any;
}

export const PaymentTable = ({ onNextClick }: Props) => {
  const [data, setData] =
    useState<ResponseFetchPaymentHistory[]>(paymentHistory);

  const handleSubmit = () => {
    onNextClick();
  };

  function gotoNext() {
    throw new Error("Function not implemented.");
  }

  function gotoPrevious() {
    throw new Error("Function not implemented.");
  }

  return (
    <div >
      <div>
        <div className="w-full font-semibold px-3 py-4 mb-5 grid grid-cols-5 rounded-[8px] text-[#032282] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#032282] bg-sky-100  text-[14px]">
          <span>Name</span>
          <span>Item</span>
          <span>Created Date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        {data?.map((list) => {
          return (
            <div key={list.id}>
              <div
                onClick={handleSubmit}
                className="border border-x-0 px-3 border-t-0 border-[#f5f5f5] font-[600] text-[#888] cursor-pointer text-[12px] py-3 grid grid-cols-5 list"
              >
                <span className="mt-3">{list.name}</span>
                <span className="mt-3">{list.item}</span>
                <span className="mt-3">{list.date}</span>
                <span className="mt-3">₦{list.amount}</span>
                <span className="mt-3">{list.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

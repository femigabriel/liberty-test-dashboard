import { Button } from "antd";
import { ResponseFetchPaymentHistory } from "./Services";
import React from "react";

export const paymentHistory: ResponseFetchPaymentHistory[] = [
  {
    id: 0,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className=" border-0 bg-red-100 text-[#c3ad2e] font-semibold text-[12px] rounded-[8px] w-[80px] ">
        Pending
      </Button>
    ),
  },
  {
    id: 1,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className=" border-0 text-green-400 text-[12px] font-semibold bg-green-100 rounded-[8px] w-[80px]">
        Paid
      </Button>
    ),
  },
  {
    id: 2,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className=" border-0 bg-gray-200 text-gray-400 text-[12px] font-semibold rounded-[8px] w-[80px]">
        Draft
      </Button>
    ),
  },
  {
    id: 3,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className=" border-0 bg-red-100 text-red-500 text-[12px] font-semibold rounded-[8px] w-[80px]">
        Rejected
      </Button>
    ),
  },
  {
    id: 4,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="border-0 bg-[darkgray] text-gray-600 text-[12px] font-semibold rounded-[8px] w-[80px]">
        Pending
      </Button>
    ),
  },
];

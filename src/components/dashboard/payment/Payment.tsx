import React, { useState } from "react";
import { PaymentTable } from "./PaymentTable";
import { CreateInvoice } from "./CreateInvoice";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export const Payment = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // switch

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <PaymentTable onNextClick={gotoNext} />;
      default:
        return (
          <CreateInvoice onNextClick={gotoNext} onBackClick={gotoPrevious} />
        );
    }
  };

  return (
    <div className="my-10 px-10">
      <div className="py-10 px-5 w-full client-table bg-white p-5 rounded-md h-full">
        <CreateInvoiceButton
          onNextClick={gotoNext}
          onBackClick={gotoPrevious}
        />
        <div>
          <PaymentTable onNextClick={gotoNext} />
        </div>
      </div>
    </div>
  );
};

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CreateInvoiceButton = ({ onNextClick, onBackClick }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onNextClick();
    console.log("hey");
  };
  return (
    <div>
      <form className="mb-14">
        <div className="flex w-full">
          <Input
            className="w-full h-[40px]"
            placeholder="Search by name, email ..."
            prefix={<SearchOutlined className="text-[#999]" />}
          />
          <Button
            type="primary"
            onClick={handleSubmit}
            className="bg-[#032282] text-[#fff] text-[14px] font-semibold h-[40px] px-5  rounded-[10px] ml-5"
            // onClick={showModal}
          >
            + Create Invoice
          </Button>
        </div>
      </form>
    </div>
  );
};

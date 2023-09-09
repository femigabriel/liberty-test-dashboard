import React, { useState } from "react";
import { PaymentTable } from "./PaymentTable";
import { CreateInvoiceButton } from "./CreateInvoice";
import { Button, Input, Modal, Select } from "antd";
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

  // const renderCurrentSelection = () => {
  //   switch (currentStepIndex) {
  //     case 0:
  //       return <PaymentTable onNextClick={gotoNext} />;
  //     default:
  //       return (
  //         <CreateInvoice onNextClick={gotoNext} onBackClick={gotoPrevious} />
  //       );
  //   }
  // };
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

// ask him who called him
import React, { useState } from "react";
import SIgnInForm from "./SigninForm";
import { Dashboard } from "../dashboard/dashboard/Dashboard";
const logo = "./assets/images/depositphotos.jpg";
import { Input } from "antd";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError(true);
      return;
    }
  };
  return (
    <div className="flex justify-center items-center login w-full h-screen pt-32">
      <div className="bg-white p-5 px-10 pt-10 w-full max-w-[450px] h-[] shadow-md">
        <div className="flex justify-between mb-5">
          <div className="mt-5">
            <h3 className="text-[16px] font-semibold">Login</h3>
            <p>Login to your account</p>
          </div>
          <div>
            <img
              src={logo}
              className="w-[95px] h-[95px] rounded-full"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <SIgnInForm />
        </div>
      </div>
    </div>
  );
};

export const Index = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const gotoNext = () => {
    setCurrentStepIndex((x) => x + 1);
  };

  const gotoPrevious = () => {
    setCurrentStepIndex((x) => x - 1);
  };

  const renderCurrentSelection = () => {
    switch (currentStepIndex) {
      case 0:
        return <Signin />;
      case 1:
        return (
          <Dashboard
          //  onNextClick={gotoNext} onBackClick={gotoPrevious}
          />
        );
      default:
        return (
          <Signin
          //  onNextClick={gotoNext}
          />
        );
    }
  };
  return <div>{renderCurrentSelection()}</div>;
};

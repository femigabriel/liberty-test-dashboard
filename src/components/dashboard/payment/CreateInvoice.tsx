"use client";

import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Form, Select } from "antd";

interface Props {
  onNextClick: () => any;
  onBackClick: () => any;
}

export const CreateInvoiceButton = ({ successCallBack }: any) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   onNextClick();
  //   console.log("hey");
  // };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateName = (event: any) => {
    setName(event.target.value);
  };

  const updateStatus = (event: any) => {
    setStatus(event.target.value);
  };
  const updateAmout = (event: any) => {
    setAmount(event.target.value);
  };
  const updateDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const updatePurpose = (event: any) => {
    setPurpose(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      name.length == 0 ||
      amount.length == 0 ||
      status.length == 0 ||
      purpose.length == 0 ||
      description.length == 0
    ) {
      setError(true);
      return;
    }
    setIsModalOpen(false);
    successCallBack({
      name,
      amount,
      status,
      description,
      purpose,
    });
    console.log(name, purpose, amount, description, status);
  };

  // Modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // Select
  const onSelectChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <>
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
              // onClick={handleSubmit}
              className="bg-[#032282] text-[#fff] text-[14px] font-semibold h-[40px] px-5  rounded-[10px] ml-5"
              onClick={showModal}
            >
              + Create Invoice
            </Button>
          </div>
        </form>
      </div>
      <Modal
        // title="Basic Modal"
        className=""
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="">
          <h2 className="text-[24px] font-semibold">Create Invoice</h2>
          <p className="text-gray-400">Create a new Invoice here</p>
          <form action="" className="py-5 ">
            <h3 className="text-[14px] font-semibold mb-5">
              Enter Invoice details
            </h3>
            <div className="flex  w-full">
              <div className="mr-2.5">
                <label htmlFor="" className="font-semibold">
                  Client's Name
                </label>
                <Input
                  placeholder=""
                  className="h-[40px] mt-2 hover:border-sky-100"
                  onChange={updateName}
                />
                {error && name.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="ml-2.5">
                <label htmlFor="" className="font-semibold">
                  Status
                </label>
                <Select
                  showSearch
                  className="w-full mt-2 hover:border-sky-100"
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onSelectChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "Pending",
                      label: "Pending",
                    },
                    {
                      value: "Paid",
                      label: "Paid",
                    },
                    {
                      value: "Draft",
                      label: "Draft",
                    },
                    {
                      value: "Rejected",
                      label: "Rejected",
                    },
                    {
                      value: "Cancelled",
                      label: "Cancelled",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex mt-5">
              <div className="flex  w-full">
                <div className="mr-2.5">
                  <label htmlFor="" className="font-semibold">
                    Amout
                  </label>
                  <Input
                    placeholder=""
                    className="h-[40px] mt-2 hover:border-sky-100"
                  />
                  {error && amount.length <= 0 ? (
                    <label className="text-red-400 font-normal text-base	">
                      Input can not be empty
                    </label>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex  w-full">
                  <div className="mr-2.5">
                    <label htmlFor="" className="font-semibold">
                      Date
                    </label>
                    <Input
                      placeholder=""
                      className="h-[40px] mt-2 hover:border-sky-100"
                    />
                  </div>
                </div>
              </div>
              <div className="flex  w-full">
                <div className="mr-2.5">
                  <label htmlFor="" className="font-semibold">
                    Purpose
                  </label>
                  <Input
                    placeholder=""
                    className="h-[40px] mt-2 hover:border-sky-100"
                  />
                  {error && purpose.length <= 0 ? (
                    <label className="text-red-400 font-normal text-base	">
                      Input can not be empty
                    </label>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <label htmlFor="" className="font-semibold">
                Description
              </label>
              <textarea name="" className="h-[80px] border"></textarea>
              {error && description.length <= 0 ? (
                <label className="text-red-400 font-normal text-base	">
                  Input can not be empty
                </label>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

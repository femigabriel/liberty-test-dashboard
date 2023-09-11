import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const TasksTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="my-10 lg:px-10 ">
      <div className="w-full px-3 py-4 mb-5 table-header grid grid-cols-6 rounded-[8px] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#032282] bg-sky-100 font-semibold text-[14px]">
        <span className="">Subject</span>
        <span>Description</span>
        <span>Status</span>
        <span> Start Date</span>
        <span> End Date</span>
        <span> Actions</span>
      </div>
      <div className=" cursor-pointer text-[12px] font-semibold">
        {rows.map((list, index) => {
          const statusText =
            list.status.charAt(0).toUpperCase() + list.status.slice(1);
          return (
            <div
              key={index}
              className="grid grid-cols-6  lg:px-3 list text-[#888] border border-x-0 border-t-0 border-gray-200 "
            >
              <span className="mt-4">{list.page}</span>
              <span className="expand  mt-4">{list.description}</span>
              <div className="mt-2">
                <span className={`label label-${list.status}`}>
                  {statusText}
                </span>
              </div>
              <span className="expand  mt-4">{list.start}</span>
              <span className="expand  mt-4">{list.end}</span>
              <div className="flex ">
                <button className="lg:mr-2 bg-red-200 delete h-[25px] px-2 rounded-md mt-1 ">
                  <DeleteOutlined
                    className="text-red-600"
                    onClick={() => deleteRow(index)}
                  />
                </button>
                <button className=" bg-green-200 edit h-[25px] px-2 rounded-md mt-1">
                  <EditOutlined
                    className="text-sky-600"
                    onClick={() => editRow(index)}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

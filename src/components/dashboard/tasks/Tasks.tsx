import React, { useState } from "react";
import { Layout } from "../../layout/Layout";
import { Button } from "antd";
import { ResponseFetctTasks } from "../../services/Services";
import { TaskList } from "../../services/clientsList";
import { Modal } from "./Modal";
import { TasksTable } from "./TasksTable";

export const Tasks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState<ResponseFetctTasks[]>(TaskList);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <Layout title="Task" description="">
      <div className="bg-white py-5">
        <div className="flex justify-between lg:px-10 pt-5 addBtn">
          <div></div>
          <Button
            onClick={() => setModalOpen(true)}
            className="btn px-5 bg-slate-950 rounded-md text-white h-[35px] font-semibold"
          >
            Add Task
          </Button>
        </div>
        <TasksTable
          rows={rows}
          deleteRow={handleDeleteRow}
          editRow={handleEditRow}
        />
      </div>

      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </Layout>
  );
};

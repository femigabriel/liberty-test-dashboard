import React from "react";
import { UserSavingsDetails } from "./UserSavingsDetails";
import { TransactionDetails } from "./TransactionDetails";
import { CashoutTransactionDetails } from "./CashoutTransactionDetails";
import { TransactionComparative } from "./TransactionComparative";
import { Layout } from "../../layout/Layout";

export const Dashboard = () => {
  return (
    <div className="">
      <Layout title="Analytics dashboard">
        <UserSavingsDetails />
        <TransactionDetails />
        <CashoutTransactionDetails />
        <TransactionComparative />
      </Layout>
    </div>
  );
};

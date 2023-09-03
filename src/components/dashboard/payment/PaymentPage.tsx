import React from "react";
import { Layout } from "../../layout/Layout";
import { Payment } from "./Payment";

export const PaymentPage = () => {
  return (
    <div>
      <Layout title="Payment" description="Here's the history of payment">
        <Payment />
      </Layout>
    </div>
  );
};

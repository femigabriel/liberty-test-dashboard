"use client";

import React from "react";
import { Layout } from "../../layout/Layout";
import { ClientsTable } from "./ClientsTable";

export default function ClientsPage() {
  return (
    <>
      <Layout title="Clients" description="Here's the clients list">
        <ClientsTable />
      </Layout>
    </>
  );
}

"use client";

import React from "react";
import { Layout } from "../../layout/Layout";
import { SchedulePage } from "./SchedulePage";

export const Schedule = () => {
  return (
    <>
      <Layout title="Clients" description="Here's the clients list">
        <SchedulePage />
      </Layout>
    </>
  );
};

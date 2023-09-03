import React from "react";
import { Layout } from "../../layout/Layout";
import { WorkspacePage } from "./WorkspacePage";

export const Workspace = () => {
  return (
    <div>
      <Layout title="Your Workface" description="Welcome, xxx">
        <div className="py-10 px-10 w-full">
          <WorkspacePage />
        </div>
      </Layout>
    </div>
  );
};

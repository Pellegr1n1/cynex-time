import React from "react";
import { Layout } from "antd";
import HeaderPage from "./HeaderPage";

export default function DefaultPage({ children }) {
  return (
    <Layout>
      <HeaderPage />
      <Layout>
        <Layout>
          <div>
              {children}
          </div>
        </Layout>
      </Layout>
    </Layout>
  )
}

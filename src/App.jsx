import { useState } from 'react'
import { Layout } from "../src/components/layout/Layout";

import './App.css'
import { Dashboard } from "../src/components/dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Krona+One&family=Nunito&family=Poppins&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Krona+One&family=Nunito&family=Poppins&family=Sora&display=swap"
          rel="stylesheet"
        ></link>
      </head> */}
    <Layout title="Analytics dashboard">
        <Dashboard />
      </Layout>
    </>
  )
}

export default App

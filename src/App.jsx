import { useState } from 'react'
import { Layout } from "../src/components/layout/Layout";
import { Route, Routes } from "react-router-dom"
import './App.css'
import { Dashboard } from "../src/components/dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
       <Layout title="Analytics dashboard">  
         <Routes>     
        <Route path="/" element={ <Dashboard />} />    
      </Routes>
      </Layout>  
    </>
  )
}

export default App

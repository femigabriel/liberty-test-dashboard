import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import { Dashboard } from "../src/components/dashboard/dashboard/Dashboard";
import { Workspace } from './components/dashboard/workfspace/Workspace';
import { Signin } from './components/sign-in/Signin';
import ClientsPage from './components/dashboard/clients/ClientsPage';
import { Schedule } from './components/dashboard/schedule/Schedule';
import { PaymentPage } from './components/dashboard/payment/PaymentPage';
import { Tasks } from './components/dashboard/tasks/Tasks';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Routes>  
         <Route path="/" element={ <Signin />} />    
        <Route path="/dashboard" element={ <Dashboard />} />    
        <Route path="/workspace" element={ <Workspace />} />    
        <Route path="/clients" element={ <ClientsPage />} />     
        <Route path="/schedule" element={ <Schedule />} />      
        <Route path="/payment" element={ <PaymentPage />} />   
        <Route path="/task" element={ <Tasks />} />   
      </Routes>
    </>
  )
}

export default App

// import React from "react";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin"; 
import { Dashboard } from "./Pages/Dashboard";
import { Sendmoney } from "./Pages/Sendmoney";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/signup" element={<Signup/>}/>
          <Route path = "/signin" element = {<Signin/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
          <Route path = "/sendmoney" element = {<Sendmoney/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

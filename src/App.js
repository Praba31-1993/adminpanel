import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Layout from "./commoncomponents/Layout";
import './App.css';
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./form/Login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    
      setIsLogged(true);
    
  };

  console.log('isLog', isLogged);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login auth={handleLogin} />} />
        <Route path="/layout" element={<PrivateRoute auth={isLogged}/>} />

      </Routes>

      {isLogged && (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />


        </Routes>
      )}
    </BrowserRouter>

  );
}

export default App;


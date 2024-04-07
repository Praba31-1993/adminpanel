import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Layout from "./commoncomponents/Layout";
import './App.css'
import Login from "./components/form/Login";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar> */}
      
      <Layout>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      {/* </Sidebar>  */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;

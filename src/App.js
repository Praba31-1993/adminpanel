import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Layout from "./commoncomponents/Layout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar> */}
      <Layout>

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      {/* </Sidebar>  */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;

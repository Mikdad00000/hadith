import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Project from "./Project/project.js";
import Form from "./Form/Form";
import Data from "./Data.js"

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>



        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Data" element={<Data />} />



      </Routes>
    </div>
  );
}

export default App;

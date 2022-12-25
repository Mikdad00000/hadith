import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Project from "./Project/project.js";
import Form from "./Form/Form";
import FormofBook from "./Formofbook.js";
import UseState from "./UseState.js";
import Book from "./Book.js";
import ColourChange from "./ColourChange.js";
import Counter from "./Counter";
import InputDynamic from "./ChatGPT";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/formofbook" element={<FormofBook />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/book" element={<Book />} />
        <Route path="/colourchange" element={<ColourChange />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/chatgpt" element={<InputDynamic/>} />
      </Routes>
    </div>
  );
}

export default App;

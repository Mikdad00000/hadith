import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Project from "./Project/Quran/project.js";
import Form from "./Form/Form";
import FormofBook from "./Form/Formofbook.js";
import UseState from "./State/UseState.js";
import Book from "./Form/Book.js";
import ColourChange from "./State/ColourChange.js";
import Counter from "./State/Counter";
import InputDynamic from "./ChatGPT";
import FetchAptArray from "./Practice/FetchApiArray.js";
import FetchAptArrayOfObject from "./Practice/FetchApiArrayOfObject.js";
import Pagination from "./Practice/Pagination.js";
import Hadith from "./Project/Hadith/Hadith.js";
import Fiqah from "./Project/Fiqah/Fiqah.js";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/form" element={<Form />} />
        <Route path="/formofbook" element={<FormofBook />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/book" element={<Book />} />
        <Route path="/colourchange" element={<ColourChange />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/chatgpt" element={<InputDynamic />} />
        <Route path="/fetchapiarray" element={<FetchAptArray />} />
        <Route
          path="/fetchapiarrayofobject"
          element={<FetchAptArrayOfObject />}
        />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/fiqah" element={<Fiqah />} />
      </Routes>
    </div>
  );
}

export default App;

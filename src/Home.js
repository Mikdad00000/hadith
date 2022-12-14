import { Link } from "react-router-dom";

export function Button({ value }) {
  return (
    <button
      type="button"
      className="border rounded-3xl h-[10%] w-[43%] bg-blue-400 m-3 p-3 hover:bg-blue-700"
    >
      {value}
    </button>
  );
}

function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-1/6 "></div>
      <div className="w-full h-4/6  flex">
        <div className="w-[38%] h-full "></div>
        <div className="w-[24%] h-full flex-wrap justify-evenly p-10">
          <Link to="/Form">
            <Button value="Form" />
          </Link>
          <Link to="/Project">
            <Button value="Project" />
          </Link>
          <Link to="/Data">
            <Button value="Data" />
          </Link>
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
          <Button value="LanguageSymbol" />
        </div>
        <div className="w-[38%] h-full "></div>
      </div>
      <div className="w-full h-1/6"></div>
    </div>
  );
}

export default Home;

// https://ahadith-api.herokuapp.com/api/ahadith/all/en

// https://ahadith-api.herokuapp.com/api/chapter/all/en

// http://api.alquran.cloud/v1/juz/30/en.asad

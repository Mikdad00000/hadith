import { Link } from "react-router-dom";

export function Button({ value }) {
  return (
    <button
      type="button"
      className="border rounded-full h-[10%] w-[43%] bg-blue-400 m-3 p-3 hover:bg-blue-700"
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
        <div className="w-[24%] h-full flex-wrap justify-evenly">
          <Link to="/form">
            <Button value="Form" />
          </Link>
          <Link to="/project">
            <Button value="Project" />
          </Link>
          <Link to="/Data">
            <Button value="Data" />
          </Link>
          <Link to="/formofbook">
            <Button value="Form of Book" />
          </Link>
          <Link to="/usestate">
            <Button value="Use State" />
          </Link>
          <Link to="/book">
            <Button value="Book" />
          </Link>
          <Link to="/counter">
            <Button value="Counter" />
          </Link>
          <Link to="/colourchange">
            <Button value="ColourChange" />
          </Link>
          <Link to="chatgpt">
            <Button value="CHATGPT" />
          </Link>
          <Link to="/book">
            <Button value="Book" />
          </Link>
          <Link to="/fetchapiarray">
            <Button value="Fetchapiarray" />
          </Link>
          <Link to="/fetchapiarrayofobject">
            <Button value="Fetchapiarrayofobject" />
          </Link>
          <Link to="/pagination">
            <Button value="Pagination" />
          </Link>
          <Link to="/paginationsecond">
            <Button value="Pagination Second" />
          </Link>

          <Link to="/formik">
            <Button value="Formik" />
          </Link>
          <Link to="/hujurerformik">
            <Button value="Register" />
          </Link>
          <Link to="/list">
            <Button value="List" />
          </Link>
          <Link to="/users">
            <Button value="Users" />
          </Link>
          <Link to="/test">
            <Button value="Test" />
          </Link>
        </div>
        <div className="w-[38%] h-full "></div>
      </div>
      <div className="w-full h-1/6"></div>
    </div>
  );
}

export default Home;

// https://ahadith-api.herokuapp.com/api/ahadith/all/en

// http://api.alquran.cloud/v1/juz/30/en.asad

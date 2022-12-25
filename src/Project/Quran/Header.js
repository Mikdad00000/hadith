import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <div className="h-[7%] bg-blue-400 flex">
      <div className="flex w-[50%]">
        <Topic value="Quran" />
        <Topic value="Hadith" />
        <Topic value="Fiqah" />
      </div>
      <div className="w-[50%] flex relative">
        <Search />
        <BiSearch className="w-12 h-9 border justify-items-center mt-4 p-2" />
      </div>
    </div>
  );
}

function Topic({ value }) {
  return (
    <div className="w-[17%]">
      <button
        type="button"
        onClick={""}
        className="m-5 text-xl hover:text-green-500"
      >
        {value}
      </button>
    </div>
  );
}

function Search() {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="placeholder:pl-5 h-9 w-[60%] rounded-full  mt-4"
      />
    </>
  );
}

export default Header;

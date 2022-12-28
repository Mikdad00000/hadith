import SortBy from "./Sortby";
import RightSide from "./RightSide";
import { FiSettings } from "react-icons/fi";
import Header from "./Header";

function Project() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[10%] h-full bg-green-500 border-2">
        <div className="w-[50%">
          <FiSettings className="w-10 h-10 " />
        </div>
      </div>
      <div className="h-full w-[70%]">
        <Header />
        <SortBy />
        <Content />
      </div>
      <RightSide />
    </div>
  );
}

function SContent() {
  const surahDetail = 0;
  return (
    <div className="w-[25%] h-[25%] border-2 rounded-2xl hover:text-blue-500">
      <p className="h-[50%]">Sl</p>
      <p>Name</p>
      <p>Tarjama</p>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[81%] bg-yellow-500  flex flex-wrap">
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
      <SContent />
    </div>
  );
}

export default Project;

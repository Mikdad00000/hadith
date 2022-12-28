import { useEffect, useState } from "react";

const FetchApiArrayOfObject = () => {
  const [bangla, setbangla] = useState("");
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    setbangla("");
  }, []);
  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-2/12 h-full"></div>
      <div className="w-8/12 h-full ">{bangla} some text</div>
      <div className="w-2/12 h-full"></div>
    </div>
  );
};

export default FetchApiArrayOfObject;

import { useState, useEffect } from "react";

const Pagination = () => {
  const [pageNo, setPageNo] = useState(0);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [pageNo]);
  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-2/12 h-full"></div>
        <div className="w-8/12 h-full ">
          <p>some text</p>
        </div>
      </div>
      <div className="w-10/12 h-full flex">
        <button
          className="w-2/12 h-full rounded-full bg-yellow-500 mt-10 ml-56 p-5 text-2xl"
          onClick={() => setPageNo(pageNo - 1)}
        >
          Back
        </button>

        <button
          className="w-2/12 h-full rounded-full bg-blue-500 mt-10 ml-96 p-5 text-2xl"
          onClick={() => setPageNo(pageNo + 1)}
        >
          Next
        </button>
      </div>
      <div className="flex ml-40">
        <button
          className="w-2/12 h-full  rounded-full bg-red-500 mt-10 ml-20 p-5 text-2xl"
          onClick={() => setPageNo(pageNo + 1)}
        >
          5
        </button>

        <button
          className="w-2/12 h-full  rounded-full bg-pink-500 mt-10 ml-20 p-5 text-2xl"
          onClick={() => setPageNo(pageNo + 1)}
        >
          10
        </button>

        <button
          className="w-2/12 h-full  rounded-full bg-green-500 mt-10 ml-20 p-5 text-2xl"
          onClick={() => setPageNo(pageNo + 1)}
        >
          20
        </button>
      </div>
    </div>
  );
};

export default Pagination;

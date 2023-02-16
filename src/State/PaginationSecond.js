import { useEffect, useState } from "react";

const PaginationSecond = () => {
  const [pageNo, setPageNo] = useState(1);
  const [bangla, setBangla] = useState([]);
  console.log(pageNo)
  console.log(bangla);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBangla(data);
      });
  }, [pageNo]);
  // fetch(
  //   "https://raw.githubusercontent.com/Balagha/dhikr/main/public/data/dhikr.json"
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setBangla(data)});
  return (
    <div className="w-full h-full">
      <div className="flex flex-row w-full h-full">
        <div className="w-2/12 h-full"></div>
        {bangla
          .filter((len, i) => i < 10 * (pageNo && i >= 10 * pageNo - 1))
          .map((item) => (
            <div className="w-6/12 h-full ">
              <p>{item.SL}</p>
              <p>{item.ARABIC}</p>
              <p>{item.BANGLA_UCCHARON}</p>
              <p>{item.BANGLA_ORTHO}</p>
            </div>
          ))}
      </div>
      <div className="flex">
        <button
          className=" rounded-full bg-yellow-500 mt-10 ml-56 p-5 text-2xl"
          onClick={() => setPageNo(pageNo - 1)}
        >
          Back
        </button>

        <button
          className=" rounded-full bg-blue-500 mt-10 ml-96 p-5 text-2xl"
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

export default PaginationSecond;

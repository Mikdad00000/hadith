import { useState } from "react";

const ColourChange = () => {
  const colours = [
    "text-green-500",
    "text-red-500",
    "text-blue-500",
    "text-yellow-500",
  ];
  const [colourChange, setcolourChange] = useState("");
  return (
    <div className="flex justify-center items-center h-screen w-full m-10 p-10">
      <p className={colourChange}>Colour Blinde</p>
      <button
        type="button"
        className="border rounded-full text-xl"
        onClick={() => setcolourChange(colours[0])}
      >
        Green text
      </button>
      <button
        type="button"
        className="border rounded-full text-xl"
        onClick={() => setcolourChange(colours[1])}
      >
        Red text
      </button>
      <button
        type="button"
        className="border rounded-full text-xl"
        onClick={() => setcolourChange(colours[2])}
      >
        Blue text
      </button>
      <button
        type="button"
        className="border rounded-full text-xl"
        onClick={() => setcolourChange(colours[3])}
      >
        {" "}
        Yellow text
      </button>
    </div>
  );
};

export default ColourChange;

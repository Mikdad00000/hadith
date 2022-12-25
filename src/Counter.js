import { useState } from "react";

const Counter = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <button
        type="button"
        className="border rounded-full bg-zinc-400"
        onClick={() => setcounter(counter + 10)}
      >
        Counter +
      </button>
      <p>{counter}</p>
      <button
        type="button"
        className="border rounded-full bg-blue-600"
        onClick={() => setcounter(counter - 10)}
      >
        Counter -
      </button>
    </div>
  );
};

export default Counter;

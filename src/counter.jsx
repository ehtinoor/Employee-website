import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
    >
      <div className="flex gap-3">
        <button className="text-red-500 text-4xl" onClick={handleDecrement}>
          -
        </button>
        <div
          className={`border p-4 rounded ${
            count ? "border-blue-500" : "border-black"
          }`}
        >
          <p
            className={`text-lg font-semibold ${
              count === 0 ? "text-blue-500" : "text-black"
            }`}
          >
            {count === 0 ? "Zero" : count}
          </p>
        </div>
        <button className="text-green-500 text-4xl" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;

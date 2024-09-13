import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("olive")
  return (
    <div
      className="w-full h-screen duration-700"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-full ">
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
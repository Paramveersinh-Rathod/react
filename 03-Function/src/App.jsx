import React from "react";

const App = () => {
  return (
    <div>
      <div
        onMouseMove={(elem) => {
          console.clear();
          console.log(elem.clientX, elem.clientY);
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <label htmlFor="">Input detection: </label>
        <input
          type="text"
          onChange={(elem) => {
            console.clear();
            console.log(`User entered: ${elem.target.value}`);
          }}
          placeholder="Enter your name"
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></div>
    </div>
  );
};

export default App;

import React from "react";
import ClickCounter from "./ClickCounter";

const App = () => {
  return (
    <div>
      <h1>
        {" "}
        Hello ts-react-webpack a good course - {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
      <ClickCounter />
    </div>
  );
};

export default App;

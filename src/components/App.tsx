import React from "react";
import ClickCounter from "./ClickCounter";

const App = () => {
  const name = "John Fabian";

  return (
    <div>
      <h2>Hi my name is {name}</h2>
      <h1>
        Hello ts-react-webpack a good course - {process.env.NODE_ENV}
        {process.env.name}
      </h1>
      <ClickCounter />
    </div>
  );
};

export default App;

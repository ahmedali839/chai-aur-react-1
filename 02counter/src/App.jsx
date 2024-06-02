import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);

  // let counter = 5

  const addvalue = () => {
    console.log("add value", counter);
    if (counter <= 19) {
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      counter = counter + 1;
      setCounter(counter);
      console.log("the value is going to increase integer.");
    }
  };

  // const addvalue = () => {
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)

  // }

  const removevalue = () => {
    console.log("remove value", Math.random());
    if (counter >= 1) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Hello you decreased negative integer.");
    }
  };

  return (
    <>
      <h1>HEllo coding</h1>
      <h2>Hello counter value: {counter}</h2>
      <button onClick={addvalue}>add value</button> <br />
      <button onClick={removevalue}>remove value</button>
    </>
  );
}

export default App;
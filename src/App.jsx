import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./store/slices/counter";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.value);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => dispatch(increment())}>
            count is: {value}
          </button>
          <button type="button" onClick={() => dispatch(decrement())}>
            count is: {value}
          </button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </p>
      </header>
    </div>
  );
}

export default App;

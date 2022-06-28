import { useCallback, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementBy,
  reduce,
  reset,
} from "./store/slices/counter/counter";
import { Input } from "./components/input";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.value);
  const [input, setInput] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <Input input={input} setInput={setInput} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>{value}</p>
        <div style={{ display: "flex" }}>
          <button onClick={() => dispatch(increment())}>Aumentar</button>
          <button onClick={() => dispatch(incrementBy(+input))}>
            Aumentar {input}
          </button>
          <button onClick={() => dispatch(reduce())}>Disminuir</button>
          <button onClick={() => dispatch(reset())}>Iniciar</button>
        </div>
      </header>
    </div>
  );
}

export default App;

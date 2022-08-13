import React from 'react';
import './App.css';
import { decrease, increase, reset } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
       <div>
        <button onClick={() => {
          console.log("dispatch")
          dispatch({"type": "INCREASE"})
      }}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
}

export default App;

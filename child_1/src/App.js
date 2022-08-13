import React from 'react';
import './App.css';
import { decrease, increase, reset } from "./redux/action";
import { useDispatch } from "react-redux";

import { GlobalStore } from 'redux-micro-frontend';
import store from "./store";

function App() {
  
  this.globalStore = GlobalStore.Get();

this.globalStore.RegisterStore("Child1", store);

this.globalStore.RegisterGlobalActions("Child1", ["INCREASE"]);

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

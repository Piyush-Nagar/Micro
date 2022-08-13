import React from 'react';
import { GlobalStore } from 'redux-micro-frontend';
import store from "./store";
import { decrease, increase, reset } from "./redux/action";


export class AppTemp extends React.Component {

    constructor(props) {
        super(props);

        this.incrementLocalCounter = this.incrementLocalCounter.bind(this);
        this.globalStore = GlobalStore.Get();
        this.globalStore.RegisterStore("Child1", store);
        this.globalStore.RegisterGlobalActions("Child1", ["INCREASE"]); 
        this.globalStore.Subscribe("Child1", this.incrementLocalCounter);
    }

    incrementLocalCounter() {
        console.log("this is triggered")
    }


    render() {
        return (
            <div className="App">
               <div>
                <button onClick={() => {
                  console.log("dispatch")
                //   store.dispatch({"type": "INCREASE"})
                this.globalStore.DispatchAction("Child1", {"type": "INCREASE"});
              }}>Increase</button>
                <button onClick={() => store.dispatch(reset())}>Reset</button>
                <button onClick={() => store.dispatch(decrease())}>Decrease</button>
              </div>
            </div>
          );
    }
}
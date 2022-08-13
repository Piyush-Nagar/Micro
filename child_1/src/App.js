import logo from './logo.svg';
import './App.css';
import { decrease, increase, reset } from "./redux/action";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./store";



function App() {

  const dispatch = useDispatch();

  return (
    <div className="App">
       <div>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
}

export default App;

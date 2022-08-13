import logo from './logo.svg';
import './App.css';
import Header from './Header';
// import MicroFrontendProxy from './MicroFrontendProxy';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MicroFrontend from './MicroFrontend';



function Child({ history }) {
  return <MicroFrontend history={history} host={"http://localhost:3005"} name="Child" />;
}

function App() {
  return (
    <div className="App">
            <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route exact path="child1" element={<Child/>} />
            {/* <Route exact path="child2/*" element={<MicroFrontendProxy/>} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

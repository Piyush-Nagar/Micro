import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";

window.renderChild = (containerId, history) => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById(containerId),
  );
};

window.unmountHeader = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Child-container')) {
  ReactDOM.render(<Provider store={store}>    
       <App />
     </Provider>
  , document.getElementById('root'));
}

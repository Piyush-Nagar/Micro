import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./store";

window.renderChild = (containerId, history) => {
  let root = createRoot(document.getElementById(containerId));
  root.render(<Provider store={store}>
    <App history={history} />
  </Provider>);
};

window.unmountHeader = containerId => {
  containerId.unmount();
};

if (!document.getElementById('Child-container')) {
  let p  = createRoot(document.getElementById('root'));
  p.render(<Provider store={store}>    
    <App />
  </Provider>)
}

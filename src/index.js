import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/configureStore";

import App from "./App";
import ToastContainer from "./components/containers/ToastContainer";

import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);

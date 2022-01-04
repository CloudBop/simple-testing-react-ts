import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App";

//
// import React from "react";
// import reportWebVitals from "./reportWebVitals";

/* istanbul ignore file */
ReactDOM.render(
  // jest/istanbul ignore converage
  // for reportWebVitals
  // <React.StrictMode>
  //</React.StrictMode>
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

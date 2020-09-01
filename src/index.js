import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TestContextProvider from "./context/TestContext";

ReactDOM.render(
  <React.StrictMode>
    <TestContextProvider>
      <App />
    </TestContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

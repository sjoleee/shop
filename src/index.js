import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let originalState = [
  { id: 6789, title: "sangjo", stock: "3" },
  { id: 6789, title: "sangj222o", stock: "5" },
];

function reducer(state = originalState, action) {
  if (action.type === "increase") {
    let increasedState = [...state];
    increasedState[0].stock++;
    return increasedState;
  } else if (action.type === "decrease") {
    let decreasedState = [...state];
    decreasedState[0].stock--;
    return decreasedState;
  } else {
    return originalState;
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

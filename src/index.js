import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let originalState = [];

function reducer2(isDiscountOpen = true, action) {
  if (action.type === "close") {
    return false;
  } else {
    return isDiscountOpen;
  }
}

const isInCart = (state, currentProductId) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].id === currentProductId) {
      let num = i;
      return num;
    }
  }
  return null;
};

function reducer(state = originalState, action) {
  if (action.type === "orderClicked") {
    if (isInCart(state, action.payload.id) !== null) {
      let increasedState = [...state];
      increasedState[isInCart(state, action.payload.id)].stock++;
      return increasedState;
    }
    let addedState = [...state];
    addedState.push(action.payload);
    return addedState;
  } else if (action.type === "increase") {
    let increasedState = [...state];
    increasedState[action.payload].stock++;
    return increasedState;
  } else if (action.type === "decrease") {
    if (state[action.payload].stock <= 0) {
      alert("수량을 줄일 수 없습니다.");
      return state;
    } else {
      let decreasedState = [...state];
      decreasedState[action.payload].stock--;
      return decreasedState;
    }
  } else {
    return originalState;
  }
}

let store = createStore(combineReducers({ reducer, reducer2 }));

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

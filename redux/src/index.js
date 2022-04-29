import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { createStore } from "redux";

const like = 0;

// ! 여기서 변수에 익명 함수를 할당했습니다.
const test = function () {
  console.log('click!')
}

// action
function hello(state = like, action) {
    if (action.type == "increase") {
      state++;
      //! 여기서 전역변수를 호출했습니다.
      test()
      return state;
    } else if (action.type == "decrease") {
      state--;
      return state;
    } else {
      return state;
    }

    
  }

// store
let store = createStore(hello);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

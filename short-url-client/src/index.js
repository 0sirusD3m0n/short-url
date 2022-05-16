import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBT7k-gCH6lBPEu0ZyaX4zUC_HqpYMA1tM",
  authDomain: "url-shortener-demo-335a2.firebaseapp.com",
  projectId: "url-shortener-demo-335a2",
  storageBucket: "url-shortener-demo-335a2.appspot.com",
  messagingSenderId: "568328291727",
  appId: "1:568328291727:web:f12186d4c2f4d88950b7fa",
  measurementId: "G-EQS91WB8W9"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

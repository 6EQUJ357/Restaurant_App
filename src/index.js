import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// redux
import { Provider } from 'react-redux';
import Restaurant_Store from './restaurant-component/components/redux/restaurant_store';

//restaurant
import {Restaurant_routings} from "./restaurant-component/routings/restaurant_routings"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Restaurant_Store}>
      <Restaurant_routings />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

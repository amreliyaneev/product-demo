import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './features/Home/Home';
import Login from './features/Login/Login';
import ProductDetail from './features/Home/ProductDetail';
import Dashboard from './features/Dashboard/Dashboard';

const container = document.getElementById('root');
const root = createRoot(container);
const PrivateRoute  = ({children}) => {
  let token = localStorage.getItem("token")
  console.log(token);
  return token ? children : <Navigate to="/login"/>
}

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path='/login' element={<Login />} /> 
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard/></PrivateRoute>} /> 
          <Route path='*' element={<h1>404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

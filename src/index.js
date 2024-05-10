import React from 'react';
import ReactDom from "react-dom/client";
import './index.css';
import App from './App';


import {BrowserRouter} from "react-router-dom"

const root = ReactDom.createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <BrowserRouter>
  <App tab="home" />
  </BrowserRouter>
  </React.StrictMode>
  );



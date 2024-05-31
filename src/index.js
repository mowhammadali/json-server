import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextAuth from './context/context-auth/ContextAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ContextAuth>
      <App />
    </ContextAuth>
  </BrowserRouter>
);
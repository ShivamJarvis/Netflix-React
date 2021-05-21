import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApiProvider from './context/ApiContext'

ReactDOM.render(
  <React.StrictMode>
    <ApiProvider>
    <App />
    </ApiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


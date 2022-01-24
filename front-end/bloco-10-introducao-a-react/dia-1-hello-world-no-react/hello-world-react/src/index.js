import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Content from './Content';
import Header from './Header';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Content />
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);

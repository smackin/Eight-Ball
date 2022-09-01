import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './NavBar';
import EightBall from './EightBall';
import './index.css';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <EightBall />
  </React.StrictMode>
);


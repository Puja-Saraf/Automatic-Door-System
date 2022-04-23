import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '40px',
  transition: transitions.FADE
}
root.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);


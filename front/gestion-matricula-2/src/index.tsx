import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Importando bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";

// Se declara una constante con el nombre root que se cargara 
// en el index.html

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// Se esta rendirezando la aplicación 
root.render(
  <React.StrictMode>
    {/* se carga el componente App */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

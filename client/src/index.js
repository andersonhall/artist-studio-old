import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { AlertProvider } from './context/AlertProvider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

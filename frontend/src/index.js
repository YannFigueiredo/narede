import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProviders from './providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);

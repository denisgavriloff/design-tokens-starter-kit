import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/vendor/reset.css';
import './tokens/css/design-tokens.css';
import './main.css';
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

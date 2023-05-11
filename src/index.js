import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

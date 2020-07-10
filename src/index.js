import './css/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const appJsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(appJsx, document.getElementById('root'));

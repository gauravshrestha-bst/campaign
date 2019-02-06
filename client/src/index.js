import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Router from './routes/route';
// ReactDOM.render(<LoginForm />, document.getElementById('root'));

ReactDOM.render((
    <Router/>
  ), document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';

//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'



ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

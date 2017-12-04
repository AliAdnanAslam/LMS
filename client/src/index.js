import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';
import setAuthToken from './utils/setAuthToken';
import store from './store/store'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

ReactDOM.render(
	<Provider store={store}>
	<Main />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

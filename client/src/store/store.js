import { createStore, compose, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

store.subscribe(throttle(() => { store.getState() }), 1000);

export default store;

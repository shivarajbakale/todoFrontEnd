import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import authReducer from '../src/Store/Reducers/auth';
import uiReducer from '../src/Store/Reducers/ui';
import taskReducer from '../src/Store/Reducers/task';
import {BrowserRouter} from 'react-router-dom';


import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    auth:authReducer,
    ui:uiReducer,
    task:taskReducer
});

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

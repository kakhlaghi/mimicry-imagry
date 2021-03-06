import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {WrapperApp} from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/indexReducer'
import 'bootstrap/dist/css/bootstrap.css'

const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;


ReactDOM.render(
    <Provider store={store}>
        <WrapperApp />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from "./containers/App";

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

const containerSelector = document.currentScript.getAttribute('data-container');
const postPerPage = document.currentScript.getAttribute('data-post-per-page') || 5;
let container = null;

if ( containerSelector ) {
    container = document.querySelector(containerSelector);
} else {
    container = document.createElement('feedback-widget');
    document.currentScript.parentNode.appendChild(container);
}

render(
    <Provider store={store}>
        <App postPerPage={postPerPage} />
    </Provider>
    , container
);
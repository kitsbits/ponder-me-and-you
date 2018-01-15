import React from "react";
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import "./styles/index.css";
import App from "./main/App";

// reducers \\
import landing from "./main/redux/landing";

const reducer = combineReducers({
    landing
});

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>,
    document.getElementById("root"));

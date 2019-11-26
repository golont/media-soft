import "./assets/scss/main.scss";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./js/redux/store/store";
import App from "./js/components/app";

const Idx = () => {
    return (
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    );
};

ReactDOM.render(<Idx />, document.getElementById("root"));

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

const JustComponent = ({ match: { params } }) => {
    return <div className="jsx">Component</div>;
};

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/list?search=:cityId" component={JustComponent} />
            <Route path="/search/:cityId" component={JustComponent} />
            <Route component={JustComponent} />
        </Switch>
    );
};

export default Routing;

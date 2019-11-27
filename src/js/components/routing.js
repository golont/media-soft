import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import NotFound from "./pages/not-found";

const JustComponent = ({ match: { params } }) => {
    return <div className="jsx">Component</div>;
};

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/list" component={SearchPage} />
            <Route path="/search/:cityId" component={JustComponent} />
            <Route component={NotFound} />
        </Switch>
    ); 
};

export default Routing;

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import City from "./pages/city";
import NotFound from "./pages/not-found";

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/list" component={SearchPage} />
            <Route path="/search/:cityId" component={City} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routing;

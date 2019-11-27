import React from "react";
import { Switch, Route } from "react-router-dom";

const JustComponent = ({match: {params}}) => {
    return <div className="jsx">Component</div>;
};

const Routing = () => {
    return (
        <Switch>
            <Route path="/" component={JustComponent} exact/>
            <Route path="/list?search=:cityId" component={JustComponent}/>
            <Route path="/search/:cityId" component={JustComponent}/>
            <Route component={JustComponent}/>
        </Switch>
    );
};

export default Routing;

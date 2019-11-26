import React from "react";
import Routing from "./../routing";
import Header from "../header/header";

const App = () => {
    return (
        <div className="container">
            <Header/>
            <Routing />
        </div>
    );
};

export default App;

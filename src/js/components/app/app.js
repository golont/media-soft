import React from "react";
import Routing from "./../routing";
import Header from "../header/header";

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Routing />
            </div>
        </>
    );
};

export default App;

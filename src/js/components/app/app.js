import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Routing from "./../routing";
import Header from "../header/header";
import { fetchCitiesRequest } from "Actions/actions";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCitiesRequest());
    }, []);
    return (
        <>
            <Header />
            <div className="container">

            </div>
            <div className="lol">

            </div>
            {/* <Routing />
            {state.cities.map(({ name, _id }) => (
                <div className="city" key={_id}>
                    {name}
                </div>
            ))} */}
        </>
    );
};

export default App;

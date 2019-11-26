import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/list">list</NavLink>
            <NavLink to="/list?search=1">list with search</NavLink>
            <NavLink to="/search/2">search</NavLink>
        </header>
    );
};

export default Header;

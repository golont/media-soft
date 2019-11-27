import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "./hamburger";

const Header = () => {
    const [links, setLinks] = useState(null);
    const [search, setSearch] = useState(null);
    const [wrapper, setWrapper] = useState(null);
    return (
        <header className="header">
            <div className="header__wrapper" ref={wrapper => setWrapper(wrapper)}>
                <div className="header__search" ref={input => setSearch(input)}>
                    <input
                        type="text"
                        className="input input-search"
                        placeholder="Search for a city"
                    />
                </div>
                <div className="header__logo">
                    <img src="assets/img/teleport.svg" alt="Teleport logo" />
                </div>
                <div className="header__links" ref={links => setLinks(links)}>
                    <NavLink className="link header__links-item" to="/list">
                        list
                    </NavLink>
                    <NavLink className="link header__links-item" to="/list?search=1">
                        list with search
                    </NavLink>
                    <NavLink className="link header__links-item" to="/search/2">
                        search
                    </NavLink>
                </div>
            </div>
            <Burger
                toggleActiveHandler={() => {
                    links.classList.toggle("header__links-active");
                    search.classList.toggle("header__search-active");
                    wrapper.classList.toggle("header__wrapper-active");
                }}
            />
        </header>
    );
};

export default Header;

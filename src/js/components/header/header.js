import React, { useState } from "react";
import Burger from "./hamburger";
import Link from "./../link";

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
                <Link className="header__logo" href="/">
                    <img src="assets/img/teleport.svg" alt="Teleport logo" />
                </Link>
                <div className="header__links" ref={links => setLinks(links)}>
                    <Link className="header__links-item" href="/list">
                        Cities
                    </Link>
                    <Link className="header__links-item" href="/search/2">
                        Search
                    </Link>
                    <Link className="header__links-item" href="https://github.com/golont/media-soft" outside={true} target="_blank">
                        GitHub
                    </Link>
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

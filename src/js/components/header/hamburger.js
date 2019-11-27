import React from "react";
import PropTypes from "prop-types";

const HamburgerMenu = ({ toggleActiveHandler }) => {
    return (
        <div className="header__hamburger">
            <input
                type="checkbox"
                id="checkbox"
                className="checkbox visuallyHidden"
            />
            <label htmlFor="checkbox">
                <div className="hamburger" onClick={toggleActiveHandler}>
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                </div>
            </label>
        </div>
    );
};

HamburgerMenu.propTypes = {
    toggleActiveHandler: PropTypes.func.isRequired
};

export default HamburgerMenu;
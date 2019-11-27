import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";

const Link = ({ outside, className, children, href, ...attrs }) => {
    const classes = classnames("link", className);
    if (outside) {
        return (
            <a href={href} className={classes} {...attrs}>
                {children}
            </a>
        );
    }
    return (
        <NavLink to={href} className={classes} {...attrs}>
            {children}
        </NavLink>
    );
};

Link.defaultProps = {
    outside: false,
    className: "",
    children: "",
    href: "#"
};

Link.propTypes = {
    outside: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    href: PropTypes.string
};

export default Link;

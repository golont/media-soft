import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ children, className, onClick, ...attrs }) => {
    const classes = classnames("button", className);
    return (
        <button className={classes} onClick={onClick} {...attrs}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    children: "button",
    className: "",
    onClick: () => {}
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;

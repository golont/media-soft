import React from "react";

const NotFound = () => {
    return (
        <div className="message message-error">
            <div className="message__text">
                This page isn't available. Sorry about that.
            </div>
            <div className="message__img">
                <img src="/assets/img/not-found.png" alt="Not Found" />
            </div>
        </div>
    );
};

export default NotFound;

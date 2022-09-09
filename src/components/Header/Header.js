import React from "react";
import classes from "./Header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
    return (
        <div className={classes.Header}>
            <div>
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default Header;

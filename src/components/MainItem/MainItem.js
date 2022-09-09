import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainItem.module.css";

export const MainItem = ({ link, onActiveHandler }) => {
    const { img, to, label } = link;

    return (
        <Link
            onClick={() => onActiveHandler({ to, label })}
            to={to}
            className={classes.MainItem}
        >
            <img src={img} alt={label} />
            <p>{label}</p>
        </Link>
    );
};

import React from "react";
import { Link } from "react-router-dom";
import classes from "./Direction.module.css";

export const Direction = ({ direction }) => {
    return (
        <div className={classes.Direction}>
            {direction.map((d, idx) => {
                return (
                    <Link key={idx} to={d.to}>
                        {idx === 0 ? null : "/"}
                        {d.label}
                    </Link>
                );
            })}
        </div>
    );
};

import React from "react";
import MainItem from "../MainItem";
import classes from "./Main.module.css";

const Main = ({ links, onActiveHandler }) => {
    return (
        <div className={classes.Main}>
            <ul>
                {links.map((link) => {
                    return (
                        <MainItem
                            key={link.id}
                            link={link}
                            onActiveHandler={onActiveHandler}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
export default Main;

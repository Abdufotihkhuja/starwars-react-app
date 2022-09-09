import React from "react";
import { Link } from "react-router-dom";
import classes from "./Item.module.css";

export const Item = ({ item, id, img, det, currentPage }) => {
    const name = item.name ? item.name : item.title;

    let url;
    if (currentPage === 1) {
        url = `${img}${id + 1}.jpg`;
    } else {
        url = `${img}${(currentPage - 1) * 10 + id + 1}.jpg`;
    }
    const urlDetails = `/${det}/${id + 1}`;
    return (
        <li className={classes.Item}>
            {<img src={url} alt="img" /> || <div>Img is not consists</div>}
            <div className={classes["info"]}>
                <p>{name}</p>
                <button>
                    <Link to={urlDetails}>Details</Link>
                </button>
            </div>
        </li>
    );
};

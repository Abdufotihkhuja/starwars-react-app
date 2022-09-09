import React from "react";
import { Item } from "../Item/Item";

export const List = ({ data, img, det, currentPage }) => {
    const styles = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "20px 10px",
        width: "100%",
    };
    return (
        <ul style={styles}>
            {data.map((item, idx) => {
                return (
                    <Item
                        key={idx}
                        det={det}
                        img={img}
                        item={item}
                        currentPage={currentPage}
                        id={idx}
                    />
                );
            })}
        </ul>
    );
};

import React, { Component } from "react";
import styles from "./pagination.module.css";
export default class Pagination extends Component {
    render() {
        const { count, paginate, current } = this.props;
        return (
            <div className={styles.Pagination}>
                <button onClick={() => paginate("prev")}>prev</button>
                <span>
                    <p>{current || "loading"}</p>
                    page of
                    <p>{count || "loading"}</p>
                </span>
                <button onClick={() => paginate("next")}>next</button>
            </div>
        );
    }
}

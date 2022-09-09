import React, { Component } from "react";
import { List } from "../../components/List/List";
import Direction from "../../components/Direction";
import Pagination from "../../components/Pagination";
import "./Characters.css";

import { Loading } from "../../components/Loading/Loading";
class Characters extends Component {
    state = {
        count: 0,
        currentPage: 1,
        next: null,
        previous: null,
        results: [],
        roads: [
            {
                to: "/",
                label: "Home",
            },
            {
                to: "/characters",
                label: "Characters",
            },
        ],
    };

    paginateFetch = async (side) => {
        let res;
        let data;
        let cur = this.state.currentPage;
        if (side === "prev") {
            if (this.state.currentPage === 1) {
                return;
            } else {
                this.setState({ results: [] });
                cur = cur - 1;
                res = await fetch(this.state.previous);
            }
        } else if (side === "next") {
            if (this.state.currentPage >= this.state.count) {
                return;
            } else {
                this.setState({ results: [] });
                res = await fetch(this.state.next);
                cur = cur + 1;
            }
        }
        if (res.status === 200) {
            data = await res.json();
        }
        this.setState({
            next: data.next,
            previous: data.previous,
            currentPage: cur,
            results: [...data.results],
        });
    };

    async componentDidMount() {
        const response = await fetch(`https://swapi.dev/api/people`);
        const data = await response.json();
        const results = [...data.results];
        const count = Math.ceil(data.count / results.length);

        this.setState({
            count: count,
            next: data.next,
            previous: data.previous,
            results,
        });
    }

    render() {
        const { results, currentPage, count, roads } = this.state;

        const img = `https://starwars-visualguide.com/assets/img/characters/`;
        return (
            <div className="container">
                <Direction direction={roads} />
                {results.length ? (
                    <List
                        data={results}
                        currentPage={currentPage}
                        img={img}
                        det={"characters"}
                    />
                ) : (
                    <Loading />
                )}
                <Pagination
                    current={currentPage}
                    count={count}
                    paginate={this.paginateFetch}
                />
            </div>
        );
    }
}

export default Characters;

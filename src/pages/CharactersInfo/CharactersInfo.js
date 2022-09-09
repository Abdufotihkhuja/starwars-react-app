import React, { Component } from "react";
import classes from "./CharactersInfo.module.css";

class CharactersInfo extends Component {
    state = {
        data: [],
    };

    async componentDidCatch() {
        const response = await fetch(`https://swapi.dev/api/people/1`);
        const data = await response.json();

        this.setState({ data: data.results });
        console.log(this.props);
    }

    render() {
        console.log("data", this.state.data);

        const {
            params: { id },
        } = this.props;

        return <div className={classes.CharactersInfo}>Hello</div>;
    }
}

export default CharactersInfo;

import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import Background from "../../layouts/Background/Background";
import Header from "../Header";
import Main from "../Main";

// Pages
import Characters from "../../pages/Characters";
import Films from "../../pages/Films";
import Planets from "../../pages/Planets";
import Species from "../../pages/Species";
import Starships from "../../pages/Starships";
import Vehicles from "../../pages/Vehicles";

import {
    FilmsLayout,
    CharactersLayout,
    PlanetsLayout,
    SpeciesLayout,
    StarshipsLayout,
    VehiclesLayout,
} from "../../layouts/InfoLayout/InfoLayout";

export default class App extends Component {
    state = {
        linkList: [
            {
                id: 1,
                to: "/characters",
                label: "Characters",
                img: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
            },
            {
                id: 2,
                to: "/films",
                label: "Films",
                img: "https://starwars-visualguide.com/assets/img/categories/films.jpg",
            },
            {
                id: 3,
                to: "/species",
                label: "Species",
                img: "https://starwars-visualguide.com/assets/img/categories/species.jpg",
            },
            {
                id: 4,
                to: "/starships",
                label: "Starships",
                img: "https://starwars-visualguide.com/assets/img/categories/starships.jpg",
            },
            {
                id: 5,
                to: "/vehicles",
                label: "Vehicles",
                img: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
            },
            {
                id: 6,
                to: "/planets",
                label: "Planets",
                img: "https://starwars-visualguide.com/assets/img/categories/planets.jpg",
            },
        ],
    };

    render() {
        const { linkList } = this.state;
        return (
            <Background>
                <Header />

                <Routes>
                    <Route path="/" index element={<Main links={linkList} />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/vehicles" element={<Vehicles />} />

                    <Route
                        path="/characters/:id"
                        element={<CharactersLayout />}
                    />
                    <Route path="/films/:id" element={<FilmsLayout />} />
                    <Route path="/planets/:id" element={<PlanetsLayout />} />
                    <Route path="/species/:id" element={<SpeciesLayout />} />
                    <Route
                        path="/starships/:id"
                        element={<StarshipsLayout />}
                    />
                    <Route path="/vehicles/:id" element={<VehiclesLayout />} />
                </Routes>
            </Background>
        );
    }
}

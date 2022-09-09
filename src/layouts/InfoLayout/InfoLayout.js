import React from "react";
import { useParams } from "react-router-dom";
import CharactersInfo from "../../pages/CharactersInfo";
import FilmsInfo from "../../pages/FilmsInfo";
import PlanetsInfo from "../../pages/PlanetsInfo";
import SpeciesInfo from "../../pages/SpeciesInfo";
import StarshipsInfo from "../../pages/StarshipsInfo";
import VehiclesInfo from "../../pages/VehiclesInfo";

const FilmsLayout = (props) => {
    const params = useParams();

    return <FilmsInfo params={params} />;
};

const PlanetsLayout = (props) => {
    const params = useParams();

    return <PlanetsInfo params={params} />;
};

const SpeciesLayout = (props) => {
    const params = useParams();

    return <SpeciesInfo params={params} />;
};

const StarshipsLayout = (props) => {
    const params = useParams();

    return <StarshipsInfo params={params} />;
};

const VehiclesLayout = (props) => {
    const params = useParams();

    return <VehiclesInfo params={params} />;
};

const CharactersLayout = (props) => {
    const params = useParams();
    console.log("props", props);

    return <CharactersInfo params={params} />;
};

export {
    FilmsLayout,
    CharactersLayout,
    PlanetsLayout,
    VehiclesLayout,
    SpeciesLayout,
    StarshipsLayout,
};

import React, {useState, useEffect} from 'react'
import CustomImage from "../custom-image";
import line from "../../assets/line.svg";
import {
    FilmItemStyles,
    FilmInfo,
    TextFilmInfo,
    FilmInfoOpacity,
    TextFilmInfoOpacity,
    FilmCard,
    FilmCardOpacity
} from "./film-item.styles"
import {getFilmsStart, setSelectedFilm} from "../../redux/film/film.actions";
import {connect} from "react-redux";

const FilmItem = ({filmData, image, hidden, index, runCustomAnimation, setSelectedFilm, id, isModalOpen}) => {
    if(hidden) return <FilmItemStyles/>

    let topMargin = 390 * (filmData.rating / 10)

    let chooseFilm = () => {
        setSelectedFilm(id)
        runCustomAnimation(index)
    }

    return (

        <FilmItemStyles onClick={chooseFilm}>
                <CustomImage src={line} className="lineLogo" style={{opacity: filmData.selected ? 1 : 0.2}} isImage={true}/>
                <FilmInfo topMargin={topMargin} selected={filmData.selected}>
                    <TextFilmInfo selected={filmData.selected}>{filmData.title}</TextFilmInfo>
                </FilmInfo>

                <FilmCard topMargin={topMargin} image={image}/>/>
                <FilmCardOpacity topMargin={topMargin} selected={filmData.selected}/>
     </FilmItemStyles>
    )
}

const mapStateToProps = state => ({
    isModalOpen: state.films.isModalOpen,
})

const mapDispatchToProps = dispatch => ({
    setSelectedFilm: (id) => dispatch(setSelectedFilm(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmItem)
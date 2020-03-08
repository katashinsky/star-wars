import React, {useEffect, useState} from 'react'
import ScrollMenu from "react-horizontal-scrolling-menu";
import FilmItem from "../film-item";
import {connect} from 'react-redux'
import {getFilmsStart, setSelectedFilm, openModal} from "../../redux/film/film.actions";
import {RELEASE_DATE} from "../../config/mainConst";
import {Container} from "./film-list.styles"

export const FilmItems = (list) => {
    return list.map(film => {
        let image = film.media.find(elem => elem.type === "image")
        return <FilmItem filmData={film} key={film.id} image={image.src}/>;
    });
}

const FilmList = ({getFilmsStart, movies, setSelectedFilm, sortedMovies, sortType}) => {
    let [filmList, setFilmList] = useState(FilmItems([]))
    useEffect(() => {
        setFilmList(FilmItems(sortType === RELEASE_DATE ? movies : sortedMovies))
    }, [movies])

    useEffect(() => {
        getFilmsStart()
    }, [])

    let onSelect = key => {
        setSelectedFilm(key)
    }

    return (
        <Container>
            <ScrollMenu
                data={filmList}
                onSelect={onSelect}
                wheel={false}
                translate={0}
            />
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    getFilmsStart: () => dispatch(getFilmsStart()),
    setSelectedFilm: (id) => dispatch(setSelectedFilm(id)),
})

const mapStateToProps = state => ({
    movies: state.films.movies,
    sortedMovies: [...state.films.movies].sort((a, b) => a.release - b.release),
    sortType: state.films.sortType
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmList)

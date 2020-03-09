import React, {useEffect, useRef, useState} from 'react'
import FilmItem from "../film-item";
import {connect} from 'react-redux'
import {getFilmsStart, setSelectedFilm} from "../../redux/film/film.actions";
import {CONTAINER_SIZE, RELEASE_DATE} from "../../config/mainConst";
import ScrollContainer from 'react-indiana-drag-scroll'
import './film-list.css'


export const FilmItems = (list, runAnimation) => {
    return list.map((film, index) => {
        let image = film.media.find(elem => elem.type === "image")
        return <FilmItem filmData={film} key={film.id} id={film.id} image={image.src} index={index + 3} runCustomAnimation={runAnimation}/>;
    });
}

const FilmList = ({getFilmsStart, movies, setSelectedFilm, sortedMovies, sortType}) => {
    const container = useRef(null);
    let [filmList, setFilmList] = useState(FilmItems([]))
    useEffect(() => {
        setFilmList(FilmItems(sortType === RELEASE_DATE ? movies : sortedMovies, runCustomAnimation))
    }, [movies])

    useEffect(() => {
        getFilmsStart()
    }, [])

    useEffect(() => {
        container.current.getElement().scrollTo(CONTAINER_SIZE * 2, 0)
    })

    let runCustomAnimation = (number) => {
        let startPosition = container.current.getElement().scrollLeft
        let startValue = startPosition
        let finishValue = (2 * CONTAINER_SIZE + CONTAINER_SIZE * number) - (CONTAINER_SIZE * 5);

        let interval = setInterval(() => {
            container.current.getElement().scrollTo(startValue, 0)
            if(finishValue < startValue) startValue -= 5
            if(finishValue > startValue) startValue += 5

            if (startValue >= finishValue - 5 && startValue <= finishValue + 5) {
                console.log("clearInterval")
                startValue = 0
                clearInterval(interval)
            }
        }, 10)
    }

    return (
        <ScrollContainer horizontal={true} className="container"
                         style={{width: "100%", height: "100%"}}
                         ref={container}
        >
            <FilmItem hidden={true}/>
            <FilmItem hidden={true}/>
            {filmList}
            <FilmItem hidden={true}/>
            <FilmItem hidden={true}/>
        </ScrollContainer>
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

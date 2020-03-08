import React from 'react'
import FilmBlock from "../film-block"
import DescriptionBlock from "../description-block";
import ActorList from "../actor-list";
import {connect} from "react-redux";
import {FILM_DESCRIPTION} from "../../config/mainConst"
import {
    CustomModalStyles,
    FilmPreview,
    ModalHeader,
    ModalBody,
    FilmDescription
} from "./custom-modal.styles"

const CustomModal = ({movieImage, isFilmPreview, movie}) => {
    let {cast, release, title, rating, trivia: {universeTimeline}} = movie
    console.log("universeTimeLine ____ ", universeTimeline)
    return (
        <CustomModalStyles>
            <FilmPreview  movieImage={movieImage} isFilmPreview={isFilmPreview}></FilmPreview>
            <ModalHeader />
            <ModalBody>
                <FilmBlock/>
                <FilmDescription className="film-description">
                    <DescriptionBlock
                        filmName={title}
                        year={new Date(release).getFullYear()}
                        rating={rating}
                        duration={universeTimeline}
                        filmInfo={FILM_DESCRIPTION}
                    />
                    <ActorList
                        cast={cast}
                    />
                </FilmDescription>
            </ModalBody>
        </CustomModalStyles>
    )
}

const mapStateToProps = state => ({
    movieImage: state.films.movie.media.filter(item => item.type === "image")[0].src,
    isFilmPreview: state.films.isFilmPreview,
    movie: state.films.movie
})

export default connect(
    mapStateToProps
)(CustomModal)

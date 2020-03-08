import React from 'react'
import CustomImage from "../custom-image";
import closeIcon from "../../assets/close-icon.svg";
import pauseSign from "../../assets/pauseSign.svg";
import {connect} from "react-redux";
import {closeModal, hideFilmPreview, showFilmPreview} from "../../redux/film/film.actions";
import ReactPlayer from 'react-player'
import {DEFAULT_FILM_TRAILER} from "../../config/mainConst"
import {FilmTrailer} from "./film-block.styles"

const FilmBlock = ({closeModal, hideFilmPreview, showFilmPreview, movieYoutube}) => {
    let playVideo = () => {
        hideFilmPreview()
    }

    let pauseVideo = () => {
        showFilmPreview()
    }

    return (
        <FilmTrailer>
            <CustomImage src={closeIcon} id="closeIcon" alt="closeIcon" isImage={true} onClick={() => closeModal()}/>
            <ReactPlayer url={movieYoutube}
                         playIcon={pauseSign}
                         width={"100%"}
                         height={"100%"}
                         onPause={() => pauseVideo()}
                         onPlay={() => playVideo()}
            />
        </FilmTrailer>
    )
}

const mapStateToProps = state => ({
    movieYoutube: state.films.movie.media.filter(item => item.type === "youtube")[0] ?
        state.films.movie.media.filter(item => item.type === "youtube")[0].src :
        DEFAULT_FILM_TRAILER,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    hideFilmPreview: () => dispatch(hideFilmPreview()),
    showFilmPreview: () => dispatch(showFilmPreview()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmBlock)

import React, {Component} from 'react';
import './main-page.css';
import Header from "../../components/header";
import FilmList from "../../components/film-list"
import CustomModal from "../../components/custom-modal";
import {getFilmsStart, setSelectedFilm} from "../../redux/film/film.actions";
import {connect} from 'react-redux'

const MainPage = ({isModalOpen}) => {
    return (
        <div className={`app ${isModalOpen? "isModalOpen" : ""}`}>
            <Header/>
            <FilmList/>
            {isModalOpen ? <CustomModal/> : null}
        </div>
    );
}

const mapStateToProps = state => ({
    isModalOpen: state.films.isModalOpen
})

export default connect(
    mapStateToProps
)(MainPage)

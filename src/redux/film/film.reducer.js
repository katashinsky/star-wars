import FilmActionTypes from './film.types'
import {setSelectedFilm, addAdditionalFields} from "./film.utils"
import {CHRONOLOGICAL_ORDER, RELEASE_DATE} from "../../config/mainConst";


const INITIAL_STATE = {
    movies: [],
    isModalOpen: false,
    movie: {},
    isFilmPreview: false,
    headerSortArray: [
        {value: RELEASE_DATE, selected: true},
        {value: CHRONOLOGICAL_ORDER, selected: false}
    ],
    sortType: RELEASE_DATE,
    characters: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    let {type, payload} = action

    switch (type) {
        case FilmActionTypes.GET_FILMS_SUCCESS:
            return {
                ...state,
                movies: payload
            };
        case FilmActionTypes.GET_FILMS_FAIL:
            return {
                ...state,
                movies: []
            };
        case FilmActionTypes.SET_SELECTED_FILM:
            let {selectedItem: selectedItem1, modifiedArray: modifiedArray1} = setSelectedFilm(state.movies, {key: 'id', value: payload.id})
            return {
                ...state,
                movies: modifiedArray1,
                isModalOpen: true,
                movie: selectedItem1,
                isFilmPreview: true
            };

        case FilmActionTypes.CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
                movies: addAdditionalFields(state.movies)
            };

        case FilmActionTypes.SHOW_FILM_PREVIEW:
            return {
                ...state,
                isFilmPreview: true
            };

        case FilmActionTypes.HIDE_FILM_PREVIEW:
            return {
                ...state,
                isFilmPreview: false
            };

        case FilmActionTypes.SORT_FILMS:
            let {selectedItem: selectedItem2, modifiedArray: modifiedArray2} = setSelectedFilm(state.headerSortArray, {key: 'value', value: payload.sortType})

            return {
                ...state,
                headerSortArray: [...modifiedArray2],
                sortType: selectedItem2.value,
                movies: [...state.movies]
            };

        case FilmActionTypes.GET_CHARACTERS_SUCCESS:
            return {
                ...state,
                characters: payload.characters
            };
        case FilmActionTypes.GET_CHARACTERS_FAIL:
            return {
                ...state,
                characters: []
            };

        case FilmActionTypes.GET_CHARACTER_BY_ID_SUCCESS:
            console.log("FilmActionTypes.GET_CHARACTER_BY_ID_SUCCESS ___ ")
            return {
                ...state,
                movies: payload.character.movies
            };
        case FilmActionTypes.GET_CHARACTER_BY_ID_FAIL:
            return {
                ...state,
                movies: []
            };

        case FilmActionTypes.SET_CHARACTER:
            return {
                ...state,
                characters: state.characters.map(character => {
                    character.selected = false
                    if(character.id === payload.id) character.selected = true
                    return character
                })
            };
        default:
            return state;
    }
};

export default cartReducer;

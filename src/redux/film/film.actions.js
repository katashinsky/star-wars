import FilmActionTypes from './film.types';

export const getFilmsStart = () => ({
    type: FilmActionTypes.GET_FILMS_START
});

export const getFilmsSuccess = (movies) => ({
    type: FilmActionTypes.GET_FILMS_SUCCESS,
    payload: movies
});

export const getFilmsFail = () => ({
    type: FilmActionTypes.GET_FILMS_FAIL
});

export const setSelectedFilm = (id) => ({
    type: FilmActionTypes.SET_SELECTED_FILM,
    payload: {id: id}
});

export const closeModal = () => ({
    type: FilmActionTypes.CLOSE_MODAL
});

export const showFilmPreview = () => ({
    type: FilmActionTypes.SHOW_FILM_PREVIEW
});

export const hideFilmPreview = () => ({
    type: FilmActionTypes.HIDE_FILM_PREVIEW
});

export const sortFilms = (sortType) => ({
    type: FilmActionTypes.SORT_FILMS,
    payload: {
        sortType: sortType
    }
});

export const getCharactersStart = () => ({
    type: FilmActionTypes.GET_CHARACTERS_START
});

export const getCharactersSuccess = (characters) => ({
    type: FilmActionTypes.GET_CHARACTERS_SUCCESS,
    payload: {characters: characters}
});

export const getCharactersFail = () => ({
    type: FilmActionTypes.GET_CHARACTERS_FAIL
});

export const getCharacterByIdStart = (id) => ({
    type: FilmActionTypes.GET_CHARACTER_BY_ID_START,
    payload: {id: id}
});

export const getCharacterByIdSuccess = (character) => ({
    type: FilmActionTypes.GET_CHARACTER_BY_ID_SUCCESS,
    payload: {character: character}
});

export const getCharacterByIdFail = () => ({
    type: FilmActionTypes.GET_CHARACTER_BY_ID_FAIL
});

export const setCharacter = (id) => ({
    type: FilmActionTypes.SET_CHARACTER,
    payload: {id: id}
});

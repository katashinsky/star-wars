import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {filmClient} from "../../graphql"
import {getCharacterByIdQuery, getCharactersQuery, getFilmsQuery} from '../../graphql/film.query'
import FilmActionTypes from './film.types';
import {
    getCharactersFail,
    getCharactersSuccess,
    getFilmsFail,
    getFilmsSuccess,
    getCharacterByIdSuccess,
    getCharacterByIdFail
} from './film.actions';
import {addAdditionalFields} from './film.utils'

export function* getFilmsStart() {
    try {
        let data = yield filmClient.request(getFilmsQuery)
        yield put(getFilmsSuccess(addAdditionalFields(data.movies.items, true)));
    } catch (error) {
        yield put(getFilmsFail())
    }
}

export function* getCharactersStart() {
    try {
        let data = yield filmClient.request(getCharactersQuery)
        yield put(getCharactersSuccess(data.characters.items.map(item => {item.selected = false; return item})));
    } catch (error) {
        yield put(getCharactersFail())
    }
}

export function* getCharactersByIdStart({payload: {id}}) {
    try {
        let data = yield filmClient.request(getCharacterByIdQuery(id))
        yield put(getCharacterByIdSuccess({id: data.character.id, movies: addAdditionalFields(data.character.movies, true)}));
    } catch (error) {
        yield put(getCharacterByIdFail())
    }
}

export function* getFilmsSaga() {
    yield takeEvery(FilmActionTypes.GET_FILMS_START, getFilmsStart);
}

export function* getCharactersSaga() {
    yield takeEvery(FilmActionTypes.GET_CHARACTERS_START, getCharactersStart);
}

export function* getCharacterByIdSaga() {
    yield takeLatest(FilmActionTypes.GET_CHARACTER_BY_ID_START, getCharactersByIdStart);
}

export function* filmsSagas() {
    yield all([
        call(getFilmsSaga),
        call(getCharactersSaga),
        call(getCharacterByIdSaga),
    ]);
}

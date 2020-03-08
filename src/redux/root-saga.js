import { all, call } from 'redux-saga/effects';

import { filmsSagas } from './film/film.sagas';

export default function* rootSaga() {
    yield all([call(filmsSagas)]);
}

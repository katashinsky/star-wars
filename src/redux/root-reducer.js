import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filmReducer from "./film/film.reducer"


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    films: filmReducer,
});

export default persistReducer(persistConfig, rootReducer);

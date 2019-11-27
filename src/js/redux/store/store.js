import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { citiesWatcher } from "Sagas/cities-saga";
import reducer from "./../reducers/reducer";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
    loading: true,
    error: false,
    cities: []
};

const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(citiesWatcher);

export default store;

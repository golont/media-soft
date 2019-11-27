import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { citiesWatcher, cityWatcher } from "Sagas/cities-saga";
import reducer from "./../reducers/reducer";

const sagaMiddleware = createSagaMiddleware();
const initialState = {
    loading: false,
    error: false,
    cities: [],
    currentCity:  {
        loading: true, 
        error: false
    }
};

const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(citiesWatcher);
sagaMiddleware.run(cityWatcher);

export default store;

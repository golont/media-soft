import { put, call, takeLatest } from "redux-saga/effects";
import * as Actions from "../actions/actions";
import service from "Services/teleport-service";

export function* fetchCitiesSaga() {
    try {
        const cities = yield call(service.getCities);
        yield put(Actions.fetchCitiesSuccess(cities));
    } catch (error) {
        yield put(Actions.fetchCitiesFailure(error));
    }
}

export function* citiesWatcher() {
    yield takeLatest(Actions.FETCH_CITIES_REQUEST, fetchCitiesSaga);
}

export function* fetchCitySaga({id}) {
    try {
        const city = yield call(service.getCity, id);
        yield put(Actions.fetchCitySuccess(city));
    } catch (error) {
        yield put(Actions.fetchCityFailure(error));
    }
}

export function* cityWatcher() {
    yield takeLatest(Actions.FETCH_CITY_REQUEST, fetchCitySaga);
}

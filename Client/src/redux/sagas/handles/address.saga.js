import { put, call, takeEvery, take } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionTypes';
import { actionGetAddress } from '../../actions/address.Action';
import { getCountry, getCity, getDistrict, getWard } from '../../../apis/address/address.api';

export function* getCountries() {
    const countries = yield call(getCountry);
    const cities = yield call(getCity);
    const districts = yield call(getDistrict);
    const wards = yield call(getWard);
    const address = {
        countries: countries.results,
        cities: cities.results,
        districts: districts.results,
        wards: wards.results,
    };

    yield put(actionGetAddress(ActionTypes.SAVE_ALL_ADDRESS, address));
}

export function* watchAddress() {
    yield takeEvery(ActionTypes.GET_ALL_ADDRESS, getCountries);
}
import { all } from 'redux-saga/effects';
import { watchUser } from './handles/user.saga';
import { watchAddress } from './handles/address.saga';

export default function* rootSaga() {
    yield all([watchUser(), watchAddress()]);
}
import { all, fork } from 'redux-saga/effects';
import { watchGetAllUser, watchUpdateUser } from './handles/user.saga';

export default function* rootSaga() {
    yield all([watchGetAllUser()]);
}
import { put, takeLatest, call, fork, takeEvery, take } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionTypes';
import { actionReceiveUsers, actionUpdateUser } from '../../actions/admin.Action';
import { getAll, update } from '../../../apis/admin/admin.api';

export function* getAllUsers() {
    const { results } = yield call(getAll);
    yield put(actionReceiveUsers(results));
}

export function* updateUser(action) {
    const { createdAt, createdBy, firstLogin, lastLogin, updatedAt, updatedBy, id, ...dataUser } = yield action.users;
    yield call(update, id, dataUser);
    yield put(actionUpdateUser(action.users));
}

export function* watchGetAllUser() {
    yield takeEvery(ActionTypes.GET_ALL_USER, getAllUsers);
    yield takeEvery(ActionTypes.UPDATE_USER, updateUser);
}
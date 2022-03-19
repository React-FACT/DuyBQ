import { put, call, takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../../constants/ActionTypes';
import { actionReceiveUsers, actionSaveUpdateUser, actionSaveDeleteUser } from '../../actions/admin.Action';
import { getAll, create, update, remove } from '../../../apis/admin/admin.api';

export function* getAllUsers() {
    const { results } = yield call(getAll);
    yield put(actionReceiveUsers(results));
}

export function* addUser(action) {
    yield call(create, action.users);
    yield getAllUsers();
}

export function* updateUser(action) {
    const { createdAt, createdBy, firstLogin, lastLogin, updatedAt, updatedBy, id, ...dataUser } = action.users;
    yield call(update, id, dataUser);
    yield put(actionSaveUpdateUser(action.users));
}

export function* deleteUser(action) {
    yield call(remove, action.userId);
    yield put(actionSaveDeleteUser(action.userId));
}

export function* watchUser() {
    yield takeEvery(ActionTypes.GET_ALL_USER, getAllUsers);
    yield takeEvery(ActionTypes.UPDATE_USER, updateUser);
    yield takeEvery(ActionTypes.ADD_USER, addUser);
    yield takeEvery(ActionTypes.UPDATE_USER, updateUser);
    yield takeEvery(ActionTypes.DELETE_USER, deleteUser);
}
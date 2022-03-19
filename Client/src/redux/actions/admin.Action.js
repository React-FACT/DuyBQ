import { ActionTypes } from '../constants/ActionTypes';

export const actionGetAllUser = () => {
    return {
        type: ActionTypes.GET_ALL_USER, // Action name
    };
};

export const actionReceiveUsers = (users) => {
    return {
        type: ActionTypes.RECEIVE_USER, // Action name
        users: users, // Params or body
    };
};

export const actionAddUser = (users) => {
    return {
        type: ActionTypes.ADD_USER,
        users: users,
    };
};

export const actionSaveAddUser = (users) => {
    return {
        type: ActionTypes.SAVE_ADD_USER,
        users: users,
    };
};

export const actionUpdateUser = (users) => {
    return {
        type: ActionTypes.UPDATE_USER,
        users: users,
    };
};
export const actionSaveUpdateUser = (users) => {
    return {
        type: ActionTypes.SAVE_UPDATE_USER,
        users: users,
    };
};

export const actionDeleteUser = (userId) => {
    return {
        type: ActionTypes.DELETE_USER,
        userId: userId,
    };
};

export const actionSaveDeleteUser = (userId) => {
    return {
        type: ActionTypes.SAVE_DELETE_USER,
        userId: userId,
    };
};
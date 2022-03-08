import { ActionTypes } from '../constants/ActionTypes';

export const actionGetAllUser = (users) => {
    return {
        type: ActionTypes.GET_ALL_USER,
        users: users,
    };
};

export const actionAddUser = (users) => {
    return {
        type: ActionTypes.ADD_USER,
        users: users,
    };
};

export const actionDeleteUser = () => {
    return {
        type: ActionTypes.DELETE_USER,
    };
};
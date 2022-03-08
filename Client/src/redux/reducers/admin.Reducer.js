import { ActionTypes } from '../constants/ActionTypes';
const initState = {
    users: [],
};

export const usersReducer = (state = initState, action) => {
    var { id } = action;
    switch (action.type) {
        case ActionTypes.GET_ALL_USER:
            state = action.users;
            return [...state];
        case ActionTypes.DELETE_USER:
            state = id;
            return [...state];

        default:
            return state;
    }
};
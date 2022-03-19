import { ActionTypes } from '../constants/ActionTypes';
const initState = {
    dataUsers: [],
    isLoading: false,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_USER:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.RECEIVE_USER:
            return {
                ...state,
                dataUsers: action.users,
                isLoading: false,
            };
        case ActionTypes.UPDATE_USER:
            return {
                ...state,
                isLoading: false,
            };
        case ActionTypes.SAVE_UPDATE_USER:
            let users = state.dataUsers.map((v) => {
                if (v.id === action.users.id) {
                    v = action.users;
                }
                return v;
            });
            return {
                ...state,
                dataUsers: users,
            };
        case ActionTypes.DELETE_USER:
            let rmUser = state['dataUsers'].filter((v) => v.id !== action.userId);
            return {
                ...state,
                dataUsers: rmUser,
            };
        default:
            return state;
    }
};
import { ActionTypes } from '../constants/ActionTypes';
const initState = {
    dataUsers: [],
    isLoaded: false,
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_USER:
            state['dataUsers'] = action.users;
            return state;
        case ActionTypes.UPDATE_USER:
            state['dataUsers'] = state['dataUsers'].map((v, idx) => {
                if (v.id === action.users.id) {
                    v = action.users;
                }
                return v;
            });
            return state;
        case ActionTypes.DELETE_USER:
            state['dataUsers'] = state['dataUsers'].filter((v) => v.id !== action.userId);
            return state;
        default:
            return state;
    }
};
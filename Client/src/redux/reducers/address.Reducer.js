import { ActionTypes } from '../constants/ActionTypes';
const initState = {
    country: [],
    city: [],
    district: [],
    ward: [],
};

export const addressReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_COUNTRY:
            state['country'] = action.address;
            return {...state };
        case ActionTypes.GET_ALL_CITY:
            state['city'] = action.address;
            return {...state };
        case ActionTypes.GET_ALL_DISTRICT:
            state['district'] = action.address;
            return {...state };
        case ActionTypes.GET_ALL_WARD:
            state['ward'] = action.address;
            return {...state };
        default:
            return state;
    }
};
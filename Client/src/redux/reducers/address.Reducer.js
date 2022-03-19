import { ActionTypes } from '../constants/ActionTypes';
const initState = {
    country: [],
    city: [],
    district: [],
    ward: [],
    isLoading: false,
};

export const addressReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_ADDRESS:
            return {
                ...state,
                isLoading: true,
            };
        case ActionTypes.SAVE_ALL_ADDRESS:
            return {
                ...state,
                country: action.address.countries,
                city: action.address.cities,
                district: action.address.districts,
                ward: action.address.wards,
                isLoading: false,
            };
        default:
            return state;
    }
};
import { ActionTypes } from '../constants/ActionTypes';

export const actionGetAddress = (action, address) => {
    switch (action) {
        case ActionTypes.GET_ALL_COUNTRY:
            return {
                type: ActionTypes.GET_ALL_COUNTRY,
                address: address,
            };
        case ActionTypes.GET_ALL_CITY:
            return {
                type: ActionTypes.GET_ALL_CITY,
                address: address,
            };
        case ActionTypes.GET_ALL_DISTRICT:
            return {
                type: ActionTypes.GET_ALL_DISTRICT,
                address: address,
            };
        case ActionTypes.GET_ALL_WARD:
            return {
                type: ActionTypes.GET_ALL_WARD,
                address: address,
            };
        default:
            return {};
    }
};
import { ActionTypes } from '../constants/ActionTypes';

export const actionGetAddress = (action, address) => {
    switch (action) {
        case ActionTypes.GET_ALL_ADDRESS:
            return {
                type: ActionTypes.GET_ALL_ADDRESS,
                address: address,
            };
        case ActionTypes.SAVE_ALL_ADDRESS:
            return {
                type: ActionTypes.SAVE_ALL_ADDRESS,
                address: address,
            };
        default:
            return {};
    }
};
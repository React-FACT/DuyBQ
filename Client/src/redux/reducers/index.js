import { combineReducers } from 'redux';
import { usersReducer } from './admin.Reducer';
import { addressReducer } from './address.Reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    address: addressReducer,
});
export default rootReducer;
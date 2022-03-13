import { combineReducers } from 'redux';
import { usersReducer } from './admin.Reducer';
import { addressReducer } from './address.Reducer';
const reducers = combineReducers({
    users: usersReducer,
    address: addressReducer,
});
export default reducers;

import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    user: userReducer
});

export default rootReducer;

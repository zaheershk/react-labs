import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import errorReducer from './error.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer
});

export default rootReducer;
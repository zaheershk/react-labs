import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth.reducer';
import errorReducer from './error.reducer';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer
});

export default persistReducer(persistConfig, rootReducer);
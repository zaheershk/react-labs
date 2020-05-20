import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth.reducer';
import errorReducer from './error.reducer';
import modalReducer from './modal.reducer';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    modal: modalReducer
});

export default persistReducer(persistConfig, rootReducer);
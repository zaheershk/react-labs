import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth.reducer';
import errorReducer from './error.reducer';
import modalReducer from './modal.reducer';
import ticketReducer from './ticket.reducer';
import userReducer from './user.reducer';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    modal: modalReducer,
    tickets: ticketReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
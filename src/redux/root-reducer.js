import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
//import { userReducer } from 'react';

export default combineReducers({
    user: userReducer
});
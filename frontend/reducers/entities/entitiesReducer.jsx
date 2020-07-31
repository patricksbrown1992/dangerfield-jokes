import usersReducer from './usersReducer';
import likeReducer from './likesReducer';

import { combineReducers } from 'redux';

const entitiesReducer = combineReducers({
    user: usersReducer,
    likes: likeReducer
    
});
export default entitiesReducer;

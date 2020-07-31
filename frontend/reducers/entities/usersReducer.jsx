import { RECEIVE_USER, REMOVE_USER} from '../../actions/sessionActions';
import {merge} from 'lodash';
const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_USER:
            return merge({}, state, {[action.user.id]: action.user});
   
        case REMOVE_USER:
            return {};
        default: 
            return state;
    }
};

export default usersReducer;
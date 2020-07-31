import { RECEIVE_LIKES, RECEIVE_LIKE, DESTROY_LIKE, CLEAR_LIKES } from '../../actions/likeActions';
import { REMOVE_USER } from '../../actions/sessionActions';
import { merge } from 'lodash';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LIKES:
            const likes = {};

            action.likes.forEach((like) => {
                likes[like.joke_id] = like;
            });

            return merge({}, state, likes);
        case RECEIVE_LIKE:
         
            return merge({}, state, { [action.like.joke_id]: action.like });
        case CLEAR_LIKES:
            return {};
        case DESTROY_LIKE:

            const newState = merge({}, state);
            delete newState[action.like.joke_id];
            return newState;
        case REMOVE_USER:
            return {};
        default:
            return state;

    }
};
export default likesReducer;
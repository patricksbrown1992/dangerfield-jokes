import * as APIUtil from '../util/likeUtil';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const DESTROY_LIKE = 'DESTROY_LIKE';
export const CLEAR_LIKES = 'CLEAR_LIKES';




const receiveLike = like => {
    debugger
    return ({
        type: RECEIVE_LIKE,
        like
    });
};

const destroyLike = like => {

    return ({
        type: DESTROY_LIKE,
        like
    });
};

const receiveLikes = likes => {
    
    return ({

        type: RECEIVE_LIKES,
        likes
    });
};

export const clearLikes = () => {
    return {
        type: CLEAR_LIKES
    }
}

export const getLikes = (user) => dispatch => (
    APIUtil.getLikes(user).then(likes => (dispatch(receiveLikes(likes))))
);

export const getLike = (id) => dispatch => (
    APIUtil.getLike(id).then(like => (dispatch(receiveLike(like))))
);

export const createLike = (like) => dispatch => {
    debugger
    return APIUtil.createLike(like).then(like => dispatch(receiveLike(like)));

};

export const updateLike = (like) => dispatch => {
    debugger
    return APIUtil.updateLike(like).then(like => (dispatch(receiveLike(like))))
};

export const deleteLike = (like) => dispatch => {
    
    return APIUtil.deleteLike(like).then(like => (dispatch(destroyLike(like))));
};



    
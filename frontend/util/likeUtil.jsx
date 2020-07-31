export const getLikes = (user) => {
    return $.ajax({
        method: 'GET',
        url: '/api/likes',
        data: {
            user_id: user.id,
        }
    });      
};

export const getLike = id => {
   
    return $.ajax({
        method: 'GET',
        url: `api/likes/${id}`,
        
    });
};

export const createLike = like => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/likes`,
        data: {
            like
        }
    });
};

export const updateLike = like => {
    debugger
    return $.ajax({
        method: 'PATCH',
        url: `api/likes/${like.id}`,
        data: {
            like
        }
    });
};

export const deleteLike = like => {
    
    return $.ajax({
        method: 'DELETE',
        url: `api/likes/${like.id}`,
        data: {
            like
        }
        
    });
};


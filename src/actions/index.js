export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

const POST_FETCH_URL = 'https://gist.githubusercontent.com/devbl/8e10ab4abe2ca613afd0db67f85d80d0/raw/a02f23b20f5a21fd13878c431874c56640b84d42/feedbacks.json';

export const receivePosts = (json) => ({
    type: RECEIVE_POSTS,
    posts: json.list,
    receivedAt: Date.now()
});

export const fetchPosts = () => dispatch => {
    dispatch({
        type: REQUEST_POSTS
    });

    return fetch(POST_FETCH_URL)
        .then(response => response.json())
        .then(json => dispatch(receivePosts(json)))
};

export const fetchPostsIfNeeded = () => dispatch => {
    return dispatch(fetchPosts())
};
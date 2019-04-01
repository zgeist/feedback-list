import { combineReducers } from 'redux'
import {
    REQUEST_POSTS, RECEIVE_POSTS
} from '../actions'

const posts = (state = {
    isFetching: false,
    posts: []
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                posts: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

const getPosts = (state = {
    isFetching: false,
    posts: []
}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return posts(state, action);
        default:
            return state
    }
}

const rootReducer = combineReducers({
    getPosts
});

export default rootReducer

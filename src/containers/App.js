import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'
import { PostsList } from '../components/PostsList/PostsList'

import './App.scss';

class App extends Component {
    static propTypes = {
        posts: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchPostsIfNeeded());
    }

    render() {
        const { posts, isFetching, postPerPage } = this.props;
        const isEmpty = posts.length === 0;
        return (
            <div className="feedback-list">
                {isEmpty
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <PostsList posts={posts} postPerPage={postPerPage} />
                }
            </div>
        );
    }
}

const mapStateToProps = store => {
    const {
        isFetching,
        lastUpdated,
        posts
    } = store.getPosts || {
        isFetching: true,
        posts: []
    };

    return {
        posts,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps)(App)
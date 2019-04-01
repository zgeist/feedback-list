import React, { Component } from "react";
import { Post } from "../Post/Post";

import "./PostsList.scss"
import PropTypes from "prop-types";

export class PostsList extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        postPerPage: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            post_show: parseInt(props.postPerPage),
            post_per_page: parseInt(props.postPerPage)|| 5
        };


        this.onClickLoadMore = this.onClickLoadMore.bind(this);
    }

    onClickLoadMore(e) {
        this.setState( state => ({
            post_show: state.post_show + state.post_per_page
        }) );
    }

    render() {
        const { posts } = this.props;
        const postToShow = posts.slice(0, this.state.post_show);
        const isShowButton = postToShow.length === posts.length;

        return (
            <div className="posts-list">
                {postToShow.map((post, i) =>
                    <Post key={i} post={post}  />
                )}
                { !isShowButton && <button className="posts__load-more" onClick={this.onClickLoadMore}>Load more</button> }
            </div>
        )
    }
}
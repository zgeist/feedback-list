import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faComment, faCommentDots } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faComment, faCommentDots)

import './PostInfo.scss'

export class PostInfo extends Component {
    render() {
        const { post } = this.props;
        const { statistics } = post;

        return (
            <div className="post-info">
                <div className="post-info__item post-info__vote"><FontAwesomeIcon icon="heart" /> { statistics.vote_count }</div>
                <div className="post-info__item post-info__view"><FontAwesomeIcon icon="comment" /> { statistics.view_count }</div>
                <div className="post-info__item post-info__answer"><FontAwesomeIcon icon="comment-dots" /> { statistics.answer_count }</div>
            </div>
        )
    }
}
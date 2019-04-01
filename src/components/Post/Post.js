import React, { Component } from "react";
import { Attachement } from "../Attachement/Attachment";
import { LastActivity } from "./LastActivity";
import { PostInfo } from "./PostInfo/PostInfo";
import { Rating } from "../Rating/Rating";

import './Post.scss';
import PropTypes from "prop-types";

export class Post extends Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        const { post } = this.props;
        const { attachments, author, rating } = post;

        return (
            <div className="post__item">
                <div className="post__author">
                    <div className="post__author--avatar">
                        { author.avatar ? <img src={author.avatar.url} /> : <div className="post__no-image"></div> }
                    </div>
                    <div className="post__author-meta">
                        <span className="post__author--name">{ author.username }</span>
                        <LastActivity lastActivity={post.last_activity_at} />
                    </div>
                </div>
                <div className="post__title"><span className="post__title-inner">{ post.title }</span> <Rating rating={rating} /></div>
                <div className="post__content">
                    <Attachement attachments={attachments} />
                    <div className="post__body" dangerouslySetInnerHTML={{__html: post.body}}></div>
                </div>

                <PostInfo post={post} />
            </div>
        )
    }
}
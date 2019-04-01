import React, { Component } from "react";

import './Attachment.scss'

export class Attachement extends Component {
    render() {
        const { attachments } = this.props;

        return (
            <div className="attachement-list">
                {attachments.map((attachment, i) =>
                    <div className="attachement-list__item"  key={i}>
                        <img src={attachment.variants.api_medium.url}  />
                    </div>
                )}
            </div>
        )
    }
}
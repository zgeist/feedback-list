import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far.faStar, fas.faStar)

import './Rating.scss'

export class Rating extends Component {
    createRating = () => {
        const { rating } = this.props;

        let ratingContainer = [];

        for (let i = 0; i < 5; i++) {
            if ( i < rating ) {
                ratingContainer.push(<span key={i}><FontAwesomeIcon icon={['fas', 'star']} /></span>)
            } else {
                ratingContainer.push(<span key={i}><FontAwesomeIcon icon={['far', 'star']} /></span>)
            }
        }

        return ratingContainer
    }

    render() {
        return (
            <div className="rating">
                { this.createRating() }
            </div>
        )
    }
}
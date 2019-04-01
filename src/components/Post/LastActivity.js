import React, { Component } from "react";

export class LastActivity extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lastModif: new Date(props.lastActivity).getTime(),
            nowTime: new Date().getTime(),
            timeDelta: null
        }
    }

    componentWillMount() {
        this.setState( state => {
            state.timeDelta = transformDate(state.nowTime - state.lastModif)
        } )
    }

    render() {
        const { timeDelta } = this.state;
        return (
            <span className="date-diff">From { timeDelta }</span>
        )
    }
}

function transformDate( timeDiff ) {
    const days = parseInt(timeDiff / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(timeDiff) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(timeDiff) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(timeDiff) / (1000) % 60);

    if ( days > 0 ) {
        return days + ( days === 1 ? ' day' : ' days' );
    } else if ( hours > 0 ) {
        return hours + ( hours === 1 ? ' hour' : ' hours' );
    } else if ( minutes > 0 ) {
        return minutes + ( minutes === 1 ? ' minute' : ' minutes' );
    } else {
        return seconds + ' seconds';
    }
}
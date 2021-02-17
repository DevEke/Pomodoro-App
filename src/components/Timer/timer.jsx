import React, { Component } from 'react';
import './timer.scss';

class Timer extends Component {

    render() {
        const { color, hover, revert, startTimer, pomo } = this.props;
        return (
            <div id="timer-container">
                <div id="timer">
                    <svg className="timer-circle-container" version="2">
                        <circle stroke={color} className="timer-circle" cx='50%' cy='50%'/>
                    </svg>
                    <div id="time-display">
                        <h1 id="time">00:00</h1>
                        <h3 onClick={startTimer} onMouseEnter={hover} onMouseLeave={revert} id="status">Start</h3>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
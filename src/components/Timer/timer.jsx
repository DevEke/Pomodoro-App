import React, { Component } from 'react';
import './timer.scss';

class Timer extends Component {
    render() {
        return (
            <div id="timer-container">
                <div id="timer">
                    <svg className="timer-circle-container" version="2">
                        <circle className="timer-circle" cx='50%' cy='50%'/>
                    </svg>
                    <div id="time-display">
                        <h1 id="time">17:59</h1>
                        <h3 id="status">restart</h3>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
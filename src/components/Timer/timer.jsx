import React, { Component } from 'react';
import './timer.scss';

class Timer extends Component {

    setupTimer = () => {
        let startMinutes = document.getElementById('pomo-counter').value;
        let totalTime = startMinutes * 60;
        let time = document.getElementById('time');
        let minutes = Math.floor(totalTime / 60);
        let seconds = totalTime % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        time.innerHTML = `${minutes}:${seconds}`
    }

    // startTimer = () => {
    //     setInterval(countdown, 1000);
    // }

    // countdown = () => {
    //     let timer = document.getElementById('time');
    //     counter--;
    //     timer.innerHTML = counter;
    // }

    componentDidMount() {
        this.setupTimer();
    }

    componentDidUpdate() {
        this.setupTimer();
    }

    render() {
        const { color, hover, revert } = this.props;
        return (
            <div id="timer-container">
                <div id="timer">
                    <svg className="timer-circle-container" version="2">
                        <circle stroke={color} className="timer-circle" cx='50%' cy='50%'/>
                    </svg>
                    <div id="time-display">
                        <h1 id="time">00:00</h1>
                        <h3 onMouseEnter={hover} onMouseLeave={revert} id="status">Start</h3>  
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;
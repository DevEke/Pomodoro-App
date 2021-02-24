import React, { useState,useEffect } from 'react';
import './timer.scss';

const Timer = (props) =>  {
    const { color, hover, revert } = props;
    const [ pomodoroSecond, setPomodoroSecond ] = useState(0);
    const [ pomodoro, setPomodoro ] = useState(props.pomodoro);
    const [ timerRunning, setTimerRunning ] = useState(false);

    var interval;
    // this will reduce pomodoroSecond by one after every one second
    const  startTimer = () => {
    if (timerRunning) return;
  
 
    setTimerRunning(true)  
    setPomodoroSecond(60);
    setPomodoro(props.pomodoro - 1);
    setTimeout(startTime, 1000)
    }

    function startTime() {
        interval = setInterval( function() {
            setPomodoroSecond((s)=> s === 0 ? s :  s - 1)
        }, 1000); 
    }
    //this will reduce pomodoro values
    useEffect(() => {
       if (pomodoroSecond === 0 && timerRunning){
        setPomodoroSecond(0);
        setPomodoro(s => s - 1);
       }
    },[pomodoroSecond])

    //This will teminate interval
    useEffect(() => {
        if(pomodoro === 0){
            clearInterval(interval)
            setTimerRunning(false);
        }
     },[pomodoro])
    
     useEffect(() => {
         console.log("called", timerRunning)
        if (timerRunning) {
            console.log(interval);
            clearInterval(interval);
            setTimerRunning(false);
            setPomodoroSecond(0);
            setPomodoro(props.pomodoro);
        }
     },[props.pomodoro])
     


        return (
            <div className="timer__container">
                <div className="timer">
                    <svg className="timer-progress-bar__container" version="2">
                        <circle stroke={color} className="timer__progress-bar" cx='50%' cy='50%'/>
                    </svg>
                    <div className="timer__time-display">
                        <h1 className="timer__time">{pomodoro > 9 ? pomodoro : '0' + pomodoro}:{pomodoroSecond > 9 ? pomodoroSecond : '0' + pomodoroSecond}</h1>
                        <h3 onMouseEnter={hover} onMouseLeave={revert} onClick={startTimer} className="timer__status">Start</h3>  
                    </div>
                </div>
            </div>
        )
 }


export default Timer;
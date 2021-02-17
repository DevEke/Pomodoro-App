import React, { Component } from 'react';
import './main-view.scss';
import Timer from '../Timer/timer';
import Settings from '../Settings/settings';
import settings from '../../img/icon-settings.svg';

class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            font: 'kumbh',
            color: '#f87070' 
        }

        
    }
    
    changeHover = (e) => {
        e.target.style.color = this.state.color;
    }

    changeHoverBack = (e) => {
        e.target.style.color = '#EFF1FA'
    }

    applySettings = (e) => {
        e.preventDefault();
        if ( document.getElementById('kumbh-font').classList.contains('selected')) {
            this.setState({
                font: 'kumbh'
            })
        } else if (document.getElementById('robotos-font').classList.contains('selected')) {
            this.setState({
                font: 'roboto'
            })
        } else if ( document.getElementById('mono-font').classList.contains('selected')) {
            this.setState({
                font: 'mono'
            })
        };
        if ( !document.getElementById('redcheck').classList.contains('hide')) {
            this.setState({
                color: '#f87070'
            })
        } else if (!document.getElementById('cyancheck').classList.contains('hide')) {
            this.setState({
                color: '#70f3f8'
            })
        } else if (!document.getElementById('purplecheck').classList.contains('hide')) {
            this.setState({
                color: '#d881f8'
            })
        }
        document.getElementById('modal-container').style.display = 'none';
    }

    showSettings = () => {
        document.getElementById('modal-container').style.display = 'block';
    }

    closeSettings = (e) => {
        e.preventDefault();
        document.getElementById('modal-container').style.display = 'none';
    }


    // startTimer = () => {
    //     setInterval(() => {
    //         let startMinutes = this.state.pomo;
    //         let totalTime = startMinutes * 60;
    //         let time = document.getElementById('time');
    //         const minutes = Math.floor(totalTime / 60);
    //         let seconds = totalTime % 60;
    //         seconds = seconds < 10 ? '0' + seconds : seconds;
    //         time.innerHTML = `${minutes}:${seconds}`;
    //         totalTime--;
    //     }, 1000);
    // }

    render() {
        const { font, color } = this.state;
        let fontStyle = {
            fontFamily: 'Kumbh Sans'
        }
        let mainColor = {
            background: 'f87070'
        }
        switch(font) {
            case 'kumbh': fontStyle = { fontFamily: 'Kumbh Sans' };
            break;
            case 'roboto': fontStyle = { fontFamily: 'Roboto Slab'};
            break;
            case 'mono': fontStyle = { fontFamily: 'Space Mono'};
            break;
            default: fontStyle = { fontFamily: 'Kumbh Sans'}
        }
        switch(color) {
            case '#f87070': mainColor = { background: '#f87070'};
            break;
            case '#70f3f8': mainColor = { background: '#70f3f8'};
            break;
            case '#d881f8': mainColor = { background: '#d881f8'};
            break;
            default: mainColor = { background: '#f87070' }
        }

        return (
            <div style={fontStyle} className="container">
                <h2 id="title">pomodoro</h2>
                <div id="menu">
                    <button style={mainColor} className="node active">pomodoro</button>
                    <button className="node">short break</button>
                    <button className="node">long break</button>
                </div>
                <Timer revert={this.changeHoverBack} hover={this.changeHover} color={color} />
                <button onClick={this.showSettings} id="open-settings">
                    <img src={settings} alt="settings-button"/>
                </button>
                <Settings 
                    applySettings={this.applySettings} 
                    closeSettings={this.closeSettings}
                    color={color} 
                />
            </div>
        )
    }
}

export default MainView;
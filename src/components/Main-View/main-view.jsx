import React, { Component } from 'react';
import './main-view.scss';
import Timer from '../Timer/timer';
import Settings from '../Settings/settings';
import settings from '../../img/icon-settings.svg';

class MainView extends Component {
    render() {
        return (
            <div className="container">
                <h2 id="title">pomodoro</h2>
                <div id="menu">
                    <button className="node active">pomodoro</button>
                    <button className="node">short break</button>
                    <button className="node">long break</button>
                </div>
                <Timer/>
                <button id="open-settings">
                    <img src={settings} alt="settings-button"/>
                </button>
                <Settings/>
            </div>
        )
    }
}

export default MainView;
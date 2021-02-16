import React, { Component } from 'react';
import './settings.scss';
import close from '../../img/icon-close.svg';
import up from '../../img/icon-arrow-up.svg';
import down from '../../img/icon-arrow-down.svg';
import check from '../../img/icon-check.svg';

class Settings extends Component {
    render() {
        return (
            <div id="modal-container">
                <div className="modal">
                    <form id="settings">
                        <div className="form-nav">
                            <h2>Settings</h2>
                            <button id="close"><img src={close}/></button>
                        </div>
                        <div className="form-section">
                            <h4>time (minutes)</h4>
                            <div className="input-flex">
                                <div className="label-input">
                                    <label className="body-2">pomodoro</label>
                                    <input type='number' defaultValue="25" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img className="arrow" src={up} alt="up arrow"/>
                                        <img className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label className="body-2">short break</label>
                                    <input type='number' defaultValue="5" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img className="arrow" src={up} alt="up arrow"/>
                                        <img className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label className="body-2">long break</label>
                                    <input type='number' defaultValue="15" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img className="arrow" src={up} alt="up arrow"/>
                                        <img className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-section spread">
                            <h4>font</h4>
                            <div className="selection-spread">
                                <div className="outline"><div id="kumbh-font" className="selection selected body-1">Aa</div></div>
                                <div className="outline"><div id="robotos-font" className="selection body-1">Aa</div></div>
                                <div className="outline"><div id="mono-font" className="selection body-1">Aa</div></div>
                            </div>
                        </div>
                        <div className="form-section spread">
                            <h4>color</h4>
                            <div className="selection-spread">
                                <div className="outline"><div id="red-color" className="selection"><img src={check}/></div></div>
                                <div className="outline"><div id="cyan-color" className="selection">{/*<img src={check}/>*/}</div></div>
                                <div className="outline"> <div id="purple-color" className="selection">{/*<img src={check}/>*/}</div></div>
                            </div>
                        </div>
                        <button id="apply">Apply</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings;
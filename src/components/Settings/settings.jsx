import React, { Component } from 'react';
import './settings.scss';
import close from '../../img/icon-close.svg';
import up from '../../img/icon-arrow-up.svg';
import down from '../../img/icon-arrow-down.svg';
import check from '../../img/icon-check.svg';

class Settings extends Component {

    pomoUp = () => {
        document.getElementById('pomo-counter').stepUp();
    }
    pomoDown = () => {
        document.getElementById('pomo-counter').stepDown();
    }
    sbUp = () => {
        document.getElementById('sb-counter').stepUp();
    }
    sbDown = () => {
        document.getElementById('sb-counter').stepDown();
    }
    lbUp = () => {
        document.getElementById('lb-counter').stepUp();
    }
    lbDown = () => {
        document.getElementById('lb-counter').stepDown();
    }
    
    setFontKumbh = () => {
        document.getElementById('kumbh-font').classList.add('selected');
        document.getElementById('robotos-font').classList.remove('selected');
        document.getElementById('mono-font').classList.remove('selected');
    }
    setFontRoboto = () => {
        document.getElementById('robotos-font').classList.add('selected');
        document.getElementById('kumbh-font').classList.remove('selected');
        document.getElementById('mono-font').classList.remove('selected');
    }
    setFontMono = () => {
        document.getElementById('mono-font').classList.add('selected');
        document.getElementById('robotos-font').classList.remove('selected');
        document.getElementById('kumbh-font').classList.remove('selected');
    }

    setColorRed = () => {
        document.getElementById('redcheck').classList.remove('hide');
        document.getElementById('cyancheck').classList.add('hide');
        document.getElementById('purplecheck').classList.add('hide');
    }
    setColorCyan = () => {
        document.getElementById('cyancheck').classList.remove('hide');
        document.getElementById('redcheck').classList.add('hide');
        document.getElementById('purplecheck').classList.add('hide');
    }
    setColorPurple = () => {
        document.getElementById('purplecheck').classList.remove('hide');
        document.getElementById('cyancheck').classList.add('hide');
        document.getElementById('redcheck').classList.add('hide');
    }

    componentDidMount() {
        document.getElementById('cyancheck').classList.add('hide');
        document.getElementById('purplecheck').classList.add('hide')
    }
    
    
    render() {
        const { applySettings, closeSettings, color } = this.props;
        return (
            <div id="modal-container">
                <div className="modal">
                    <form id="settings">
                        <div className="form-nav">
                            <h2>Settings</h2>
                            <button onClick={closeSettings} id="close"><img src={close} alt="close icon"/></button>
                        </div>
                        <div className="form-section">
                            <h4>time (minutes)</h4>
                            <div className="input-flex">
                                <div className="label-input">
                                    <label className="body-2">pomodoro</label>
                                    <input id="pomo-counter" type='number' defaultValue="25" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img onClick={this.pomoUp} id="pomo-arrow-up" className="arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.pomoDown}id="pomo-arrow-down" className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label className="body-2">short break</label>
                                    <input id="sb-counter" type='number' defaultValue="5" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img onClick={this.sbUp} id="sb-arrow-up" className="arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.sbDown} id="sb-arrow-down" className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="label-input">
                                    <label className="body-2">long break</label>
                                    <input id="lb-counter" type='number' defaultValue="15" min='1' max='99'/>
                                    <div className="custom-spinners">
                                        <img onClick={this.lbUp} id="lb-arrow-up" className="arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.lbDown} id="lb-arrow-down" className="arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-section spread">
                            <h4>font</h4>
                            <div className="selection-spread">
                                <div className="outline"><div onClick={this.setFontKumbh} id="kumbh-font" className="selection selected body-1">Aa</div></div>
                                <div className="outline"><div onClick={this.setFontRoboto} id="robotos-font" className="selection body-1">Aa</div></div>
                                <div className="outline"><div onClick={this.setFontMono} id="mono-font" className="selection body-1">Aa</div></div>
                            </div>
                        </div>
                        <div className="form-section spread">
                            <h4>color</h4>
                            <div className="selection-spread">
                                <div className="outline"><div onClick={this.setColorRed} id="red-color" className="selection"><img id="redcheck" src={check} alt="check icon"/></div></div>
                                <div className="outline"><div onClick={this.setColorCyan} id="cyan-color" className="selection"><img id="cyancheck" src={check} alt="check icon"/></div></div>
                                <div className="outline"> <div onClick={this.setColorPurple} id="purple-color" className="selection"><img id="purplecheck" src={check} alt="check icon"/></div></div>
                            </div>
                        </div>
                        <button style={{background: color}} onClick={applySettings} id="apply">Apply</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Settings;
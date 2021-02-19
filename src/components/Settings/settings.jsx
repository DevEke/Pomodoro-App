import React, { Component } from 'react';
import './settings.scss';
import up from '../../img/icon-arrow-up.svg';
import down from '../../img/icon-arrow-down.svg';
import check from '../../img/icon-check.svg';

class Settings extends Component {

    pomoUp = () => {
        this.pomoUp()    
    }
    pomoDown = () => {
       this.props.pomoDown()
    }
    sbUp = () => {
        this.props.sbUp();
    }
    sbDown = () => {
        this.props.sbDown()
         }
    lbUp = () => {
        this.props.lbUp();    
    }
    lbDown = () => {
        this.props.lbDown();
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
            <div className="settings__modal-container">
                <div className="settings__modal">
                    <form className="settings">
                        <div className="settings__form-header">
                            <h2 className="settings__form-title">Settings</h2>
                            <button onClick={closeSettings} className="settings__close-button"/>
                        </div>
                        <div className="form-section__set-time">
                            <h4 className="set-time__title">time (minutes)</h4>
                            <div className="form-set-time__container">
                                <div className="form-input__container">
                                    <label className="form-input__label">pomodoro</label>
                                    <input className="form-input__input" id="pomo-counter" type='number'  onChange={(e)=> this.props.setPomodoro(e.target.value)} value={this.props.pomodoro} defaultValue="25" min='1' max='99'/>
                                    <div className="form-input__custom-spinners">
                                        <img onClick={this.pomoUp} id="pomo-arrow-up" className="form-input__arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.pomoDown}id="pomo-arrow-down" className="form-input__arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="form-input__container">
                                    <label className="form-input__label">short break</label>
                                    <input className="form-input__input" id="sb-counter" type='number' onChange={(e)=> this.props.setShortBreak(e.target.value)} value={this.props.shortBreak} defaultValue="5" min='1' max='99'/>
                                    <div className="form-input__custom-spinners">
                                        <img onClick={this.sbUp} id="sb-arrow-up" className="form-input__arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.sbDown} id="sb-arrow-down" className="form-input__arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                                <div className="form-input__container">
                                    <label className="form-input__label">long break</label>
                                    <input className="form-input__input" id="lb-counter" type='number' onChange={(e)=> this.props.setLongBreak(e.target.value)} value={this.props.longBreak} defaultValue="15" min='1' max='99'/>
                                    <div className="form-input__custom-spinners">
                                        <img onClick={this.lbUp} id="lb-arrow-up" className="form-input__arrow" src={up} alt="up arrow"/>
                                        <img onClick={this.lbDown} id="lb-arrow-down" className="form-input__arrow" src={down} alt="down arrow"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-section__set-font spread">
                            <h4 className="set-font__title">font</h4>
                            <div className="form-radio__container">
                                <div className="form-radio__outline"><div onClick={this.setFontKumbh} id="kumbh-font" className="selection selected body-1">Aa</div></div>
                                <div className="form-radio__outline"><div onClick={this.setFontRoboto} id="robotos-font" className="selection body-1">Aa</div></div>
                                <div className="form-radio__outline"><div onClick={this.setFontMono} id="mono-font" className="selection body-1">Aa</div></div>
                            </div>
                        </div>
                        <div className="form-section__set-color spread">
                            <h4 className="set-color__title">color</h4>
                            <div className="form-radio__container">
                                <div className="form-radio__outline"><div onClick={this.setColorRed} id="red-color" className="selection"><img id="redcheck" src={check} alt="check icon"/></div></div>
                                <div className="form-radio__outline"><div onClick={this.setColorCyan} id="cyan-color" className="selection"><img id="cyancheck" src={check} alt="check icon"/></div></div>
                                <div className="form-radio__outline"> <div onClick={this.setColorPurple} id="purple-color" className="selection"><img id="purplecheck" src={check} alt="check icon"/></div></div>
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
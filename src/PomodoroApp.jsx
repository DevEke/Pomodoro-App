import React, { Component } from 'react';
import './_library.scss';
import './MediaQueries/tablet.scss';
import './MediaQueries/mobile.scss';

import './App.css';
import MainView from './components/Main-View/main-view';

class PomodoroApp extends Component {
  render() {
    return (
      <MainView/>
    );

  }
}

export default PomodoroApp;

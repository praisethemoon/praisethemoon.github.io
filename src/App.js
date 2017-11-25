/*
 * Main App component
 */

import React, { Component } from 'react'
import AppLayout from './pages/AppLayout'
import { HashRouter, Router } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <AppLayout />
        </HashRouter>
      </div>
    );
  }
}

export default App;
/*
 * Main App component
 */

import React, { Component } from 'react'
import AppLayout from './pages/AppLayout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout />
      </div>
    );
  }
}

export default App;
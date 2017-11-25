/*
 * Main App component
 */

import React, { Component } from 'react'
import AppLayout from './pages/AppLayout'
import { BrowserRouter, Router } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
		<BrowserRouter>
			<AppLayout />
		</BrowserRouter>
      </div>
    );
  }
}

export default App;
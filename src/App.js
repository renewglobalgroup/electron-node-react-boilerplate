import React, { Component } from "react"
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import SampleTemplate from './components/Sample';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SampleTemplate />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
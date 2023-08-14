import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Languages from './components/Languages/Languages';
import SocialIcons from './components/SocialIcons/SocialIcons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Languages />
      <Projects />
      <SocialIcons />
    </div>
  );
}

export default App;

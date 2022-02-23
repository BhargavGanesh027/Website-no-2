import React from 'react';
import { About, Contact, Header, Intro, Projects } from './container';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Intro />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;

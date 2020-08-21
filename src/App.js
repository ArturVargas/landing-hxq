import React from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar className="nav-header" />
      <div className="content">
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          {/* <Contact /> */}
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;

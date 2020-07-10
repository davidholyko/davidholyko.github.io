import React, { Component } from 'react';
import Header from './landing-page/Header';
import Background from './landing-page/Background';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './landing-page/Footer';

class App extends Component {
  render() {
    return (
      <main id="app">
        <Header />
        <section id="landing-page">
          <Background />
        </section>

        <section id="sections">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;

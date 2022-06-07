import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experiance from './components/Experience/Experience';
// import Services from './components/Services/Services';
import Portfolio from './components/Porfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiance />
      {/* <Services /> */}
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

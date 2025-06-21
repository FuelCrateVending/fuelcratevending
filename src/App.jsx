import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import How from './components/How.jsx';
import Products from './components/Products.jsx';
import Host from './components/Host.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <How />
        <Products />
        <Host />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

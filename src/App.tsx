import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Culture from './components/Culture';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

function App() {
  useEffect(() => {
    emailjs.init({
      publicKey: "lPPz-aS9BYkxzgQL5",
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Culture />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
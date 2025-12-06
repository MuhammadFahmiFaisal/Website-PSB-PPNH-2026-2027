import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import AdmissionsInfo from './components/AdmissionsInfo';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Programs />
        <Gallery />
        <VideoGallery />
        <AdmissionsInfo />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
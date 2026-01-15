import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import MootGallery from './components/MootGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-justice-gold selection:text-charcoal">
      <Navigation />
      <main>
        <Hero />
        <Bio />
        <ExperienceTimeline />
        <Education />
        <MootGallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ExperienceTimeline from './components/ExperienceTimeline';
import Education from './components/Education';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import MediaCoverage from './components/MediaCoverage';
import Gallery from './components/Gallery';
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
        <Publications />
        <Achievements />
        <MediaCoverage />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;

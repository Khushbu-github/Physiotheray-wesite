
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import RecoveryStories from './components/RecoveryStories';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg select-none selection:bg-brand-link selection:text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Introduction />
        <Services />
        <RecoveryStories />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;

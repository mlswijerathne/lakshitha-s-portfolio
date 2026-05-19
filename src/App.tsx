import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Writing from './components/Writing';
import Footer from './components/Footer';
import { useMediumArticles } from './hooks/useMediumArticles';

export default function App() {
  const { articles, loading } = useMediumArticles();

  return (
    <div className="bg-white text-[#0A0A0A] font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Writing articles={articles} loading={loading} />
      </main>
      <Footer />
    </div>
  );
}

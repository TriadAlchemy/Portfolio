
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mywork from './components/Mywork';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

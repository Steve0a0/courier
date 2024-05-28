import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css';



function App() {
  

  return (
    <div className="App">
          <Navbar />
          <Hero />
          <Carousel />
          <Service />
          <About />
          <Contact />
          <Footer />
        
    </div>
  );
}

export default App;

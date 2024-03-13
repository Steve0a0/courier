import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Carousel from "./Components/Carousel";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css';
import { useState, useEffect } from "react";
// import ScaleLoader from "react-spinners/ScaleLoader"; // Import ScaleLoader

function App() {
  // const [loading, setLoading] = useState(true); // Set loading initially to true
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); // Set loading to false after 5 seconds
  //   }, 3000);
  // }, []);

  // const color = "#ffcc5c"; // Define your desired color here

  return (
    <div className="App">
      {/* {loading ? (
        <div className="loading-spinner">
          <ScaleLoader color={color} loading={loading} size={40} />
        </div>
      ) : (
        <> */}
          <Navbar />
          <Hero />
          <Carousel />
          <Service />
          <About />
          <Contact />
          <Footer />
        {/* </>
      )} */}
    </div>
  );
}

export default App;

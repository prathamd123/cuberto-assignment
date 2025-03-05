import "./App.css";
import FeatureProjects from "./components/FeatureProjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Inspo from "./components/Inspo";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import Philosophy from "./components/Philosophy";
import Resources from "./components/Resources";
import Video from "./components/Video";

function App() {
  return (
    <>
    <div>
            <div className="mobile-message">
                Working on the responsiveness
            </div>
            <div className="desktop-content">
            <Navbar />
      <Hero />
      <Video />
      <Middle />
      <FeatureProjects />
      <Philosophy />
      <Resources />
      <Inspo />
      <Footer />
            </div>
        </div>
     
    </>
  );
}

export default App;

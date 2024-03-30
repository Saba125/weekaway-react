import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/top-bar";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Activities from "./components/activities";
import Booking from "./components/booking";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

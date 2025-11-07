import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen ">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <h1 className="text-4xl font-bold text-blue-600 mb-4 mt-5">
        kajal kotak portfolio
      </h1> */}
      {/* <h2 className="mb-2">I'm a passionate React Developer</h2> */}
      {/* <p className="text-gray-600 text-lg">
        Welcome to my portfolio website 🎨
      </p> */}
    </div>
  );
}

export default App;

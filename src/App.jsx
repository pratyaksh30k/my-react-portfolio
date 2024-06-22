import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
      </div>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black py-20">
        <Contact/>
      </div>
    </div>
  );
}

export default App;

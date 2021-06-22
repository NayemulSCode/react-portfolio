import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import resumeData from './resumeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './components/Education/Education';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])
  return (
    <div className="App">
      <Header resumeData = {resumeData} />
      <About resumeData = {resumeData} />
      <Education resumeData={resumeData} />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

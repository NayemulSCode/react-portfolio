import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import resumeData from './resumeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './components/Education/Education';
function App() {
  return (
    <div className="App">
      <Header resumeData = {resumeData} />
      <About resumeData = {resumeData} />
      <Education resumeData={resumeData} />
    </div>
  );
}

export default App;

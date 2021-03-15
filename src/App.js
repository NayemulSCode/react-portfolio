import './App.css';
import Header from './components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import resumeData from './resumeData';
function App() {
  return (
    <div className="App">
     <Header resumeData={ resumeData} />
    </div>
  );
}

export default App;

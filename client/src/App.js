import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          J. Carltons Handy Work
        </h1>
        <div id="under-construction">
          <h3>(...Under Construction...)</h3><i className="fas fa-wrench fa-2x"></i><i className="fas fa-hard-hat fa-2x"></i>
        </div>
      </header>
    </div>
  );
}

export default App;

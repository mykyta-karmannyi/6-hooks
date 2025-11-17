// import logo from './logo.svg';
import './App.css';
import Windowscroll from './Windowscroll';
import WindowSize from './WindowSize'; 
import Mediaquery from './MediaQuery';
import Sessionstorage from './SessionStorage';
import Countinuousretry from './CountinuousRetry';
import Keypress from './KeyPress';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Windowscroll />
        <WindowSize />
        <Mediaquery />
        <Sessionstorage />
        <Countinuousretry />
        <Keypress />
      </header>
    </div>
  );
}

export default App;

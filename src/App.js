import logo from './logo.svg';
import './App.css';
import moment from 'moment';

function App() {
  console.log(moment);
  return (
    <div className="App">
      <header className="App-header">
        {moment('20011104T120854').format('MMMM Do YYYY')}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

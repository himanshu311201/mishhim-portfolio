import logo from './logo.svg';
import './App.css';
import HomepageLayout from './/portfolio/portfolio.jsx';
import HeaderNav from './/portfolio/header.jsx';
// import Portfolio from './components/portfolio';
import 'semantic-ui-css/semantic.min.css'
function App() {
  return (
    <div className="App" style ={{backgroundColor:'#1b1c1d'}}>
      <HomepageLayout/>
    </div>
  );
}

export default App;

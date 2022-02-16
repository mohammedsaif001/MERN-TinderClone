import './App.css';
import Header from './Components/Header';
import TinderCard from './Components/TinderCardPhoto';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header/>
      <TinderCard/>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import SwipeButtons from './Components/SwipeButtons';
import TinderCard from './Components/TinderCardPhoto';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header/>
      <TinderCard/>
      <SwipeButtons/>
    </div>
  );
}

export default App;

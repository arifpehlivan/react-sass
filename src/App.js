import './App.scss';
import Header from "./components/Header"
import Section from "./components/Section"
import {Data} from "./components/Data"
import Second from './components/Second';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section slides={Data}/>
      <Second/>
    </div>
  );
}

export default App;

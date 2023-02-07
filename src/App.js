import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import TechStack from './components/techstack';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <TechStack/>
      <Projects/>
    </div>
  );
}

export default App;

import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import TechStack from "./components/techstack";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <TechStack />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

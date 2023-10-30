import Hero from './Hero';
import About from './About'
import './App.css';
import ProjectsHome from './ProjectsHome';
import Nav from './Nav';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Content/>
    </div>
  );
}

export default App;

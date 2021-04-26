import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectsSection';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Hero></Hero>
      <ProjectSection></ProjectSection>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;

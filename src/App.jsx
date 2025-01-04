import './App.css'
import AboutSection from './sections/About/About';
import Contact from './sections/Contact/Contact';
import Home from './sections/Home/Home';
import NavigationBar from './sections/NavigationBar/Navigation';
import ProjectSection from './sections/ProjectsSection';

function App() {
  return (
    <main>
      <NavigationBar/>
      <Home/>
      <AboutSection/>
      <ProjectSection/>
      <Contact/>
    </main>
  )
}

export default App;

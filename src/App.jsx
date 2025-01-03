import './App.css'
import AboutSection from './sections/About/About';
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
    </main>
  )
}

export default App;

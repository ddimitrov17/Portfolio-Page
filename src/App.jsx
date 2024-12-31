import './App.css'
import AboutSection from './sections/About';
import Home from './sections/Home/Home';
import NavigationBar from './sections/NavigationBar/Navigation';

function App() {
  return (
    <main>
      <NavigationBar/>
      <Home/>
      <AboutSection/>
    </main>
  )
}

export default App;

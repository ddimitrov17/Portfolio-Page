import './App.css'
import Home from './sections/Home/Home';
import NavigationBar from './sections/NavigationBar/Navigation';

function App() {

  return (
    <main className='pt-20'>
      <NavigationBar/>
      <Home/>
    </main>
  )
}

export default App;

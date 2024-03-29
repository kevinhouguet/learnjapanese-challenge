import './App.css'
import Hero from './Components/Hero'
import NavBar from './Components/NavBar'
import PageElements from './Components/PageElements'

function App() {

  document.title = 'Learn Japanese'

  return (
    <div className='container'>
      <NavBar />
      <Hero />
      <PageElements />
    </div>
  )
}

export default App

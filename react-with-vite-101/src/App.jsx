import useFetch from './components/UseFetch'
import './App.css'
import Movies from './components/Movies';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai'
import Hero from './components/Hero';

function App() {

  const { data, loading, error } = useFetch('https://restcountries.com/v3.1/all');


  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="App">
      <Movies />
      <GiHamburgerMenu className='hamburger' />
      <AiFillHome />
      <Hero />
    </div>
  )
}

export default App

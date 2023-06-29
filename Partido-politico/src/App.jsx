
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Home/>
      </div>
    </>
  )
}

export default App

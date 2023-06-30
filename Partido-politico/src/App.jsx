
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import Proposal from './components/Proposal';
import Affiliate from './components/Affiliate';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/proposal' element={<Proposal/>}/>
          <Route path='/affiliate' element={<Affiliate/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

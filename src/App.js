import './App.css'
import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import { Start } from './pages/Start'
import {Navbar} from './components/Navbar'
import {Aboutpage} from './pages/Aboutpage'
import {Skillpage} from './pages/Skillpage'
import {Proyectspage} from './pages/Proyectspage'
import { GeneralProvider } from './context/reactcontext';
import { useStartContext } from './context/reactcontext';

function App() {
  const startContext = useStartContext()
  const [hidden, setHidden] = useState(false)
  

  return (
    
    <div className="App">
      <div className="contstart">
      <div className= {startContext ?'down':'up'} >
       <Start/>
       </div>
       </div>
       <div className= {startContext ?'navdown':'navup'} >
      <Navbar/>
      </div>
      <div className= 'hidden' >
<Routes>
  <Route path='/' element = {<Aboutpage/>}/>
  <Route path='/aboutme' element = {<Aboutpage/>}/>
  <Route path='/skills' element = {<Skillpage/>}/>
  <Route path='/proyects' element = {<Proyectspage/>}/>
</Routes>
</div>
    </div>
  )
}

export default App


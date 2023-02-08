import './App.css'
import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import { Start } from './components/Start'
import {Navbar} from './components/Navbar'
import {Aboutpage} from './pages/Aboutpage'
import {Skillpage} from './pages/Skillpage'
import {Proyectspage} from './pages/Proyectspage'
import { useStartContext } from './context/reactcontext';
import { Referencespage } from './pages/Referencespage';


function App() {
  const startContext = useStartContext()
  const [hidden, setHidden] = useState(false)
  

  return (
    
    <div className="App">
<Routes>
  <Route path='/' element = {<Aboutpage/>}/>
  <Route path='/aboutme' element = {<Aboutpage/>}/>
  <Route path='/knowledge' element = {<Skillpage/>}/>
  <Route path='/proyects' element = {<Proyectspage/>}/>
  <Route path='/skills' element = {<Referencespage/>}/>
</Routes>
  </div>

  )
}

export default App


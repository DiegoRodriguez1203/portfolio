import './App.css'
import { useState } from 'react'; 
import { Routes, Route } from 'react-router-dom';
import { Start } from './components/Start'
import {Navbar} from './components/Navbar'
import {Aboutpage} from './pages/Aboutpage'
import {Skillpage} from './pages/Skillpage'
import {Proyectspage} from './pages/Proyectspage'
import { GeneralProvider } from './context/reactcontext';
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
  <Route path='/skills' element = {<Skillpage/>}/>
  <Route path='/proyects' element = {<Proyectspage/>}/>
  <Route path='/references' element = {<Referencespage/>}/>
</Routes>
  </div>

  )
}

export default App


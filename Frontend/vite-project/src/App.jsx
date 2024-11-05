//import { useState } from 'react'


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
// import CounterButton from './components/counterbutton';
// import TableToto from './components/PlayerTable';
// import ToDoList from './components/ToDoList';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Toto from './pages/toto'
import { useNavigate } from 'react-router-dom'


function App() {
  const navigate = useNavigate()

  return (
    <>
    <ul>
      <li>
        <button onClick={() => navigate('/')}>Home</button>
      </li>
      <li>
        <button onClick={() => navigate('/toto')}>Toto</button>
      </li>
    </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toto" element={<Toto />} />
      </Routes>

      
    </>
  )
}

export default App

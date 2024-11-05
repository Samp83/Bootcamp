//import { useState } from 'react'


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
// import CounterButton from './components/counterbutton';
// import TableToto from './components/PlayerTable';
// import ToDoList from './components/ToDoList';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Toto from './pages/toto'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toto" element={<Toto />} />
      </Routes>

      
    </>
  )
}

export default App

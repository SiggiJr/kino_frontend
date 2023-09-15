import { Route, Routes } from 'react-router'
import './App.css'
import Saalplan from './pages/Saalplan'
import Dashboard from './pages/Dashboard'
import { useState } from 'react'

function App() {

  const [seats, setSeats] = useState([])


  return (
    <>
      <Routes>
        <Route path='/' element={<Saalplan seats={seats} setSeats={setSeats}/>}/>
        <Route path='/dashboard' element={<Dashboard seats={seats} setSeats={setSeats}/>}/>
      </Routes>
    </>
  )
}

export default App

import Home from './components/Home'
import IncidentForm from './components/IncidentForm'
import parksData from './data/data.json'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {

  const [parks, setParks] = useState([])

  useEffect(() => {
    setParks(parksData)
  }, [])

  return (
    <>
      <header>

      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} />}/>
          <Route path='/:id/:rideId/incidents/create' element={<IncidentForm parks={parks} />} />
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

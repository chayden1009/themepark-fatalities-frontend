import Home from './components/Home'
import Nav from './components/Nav'
import AddParkForm from './components/AddParkForm'
import ParkDetail from './components/ParkDetail'
import AddRideForm from './components/AddRideForm'
import parksData from './data/data.json'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'


function App() {
  const location = useLocation() 
  const [parks, setParks] = useState([])

  useEffect(() => {
    setParks(parksData)
  }, [])

  let buttonText, buttonRoute
  if (location.pathname.startsWith('/parks/')) {
    buttonText = 'Add a Ride'
    buttonRoute = '/add-ride'
  } else {
    buttonText = 'Add a Park'
    buttonRoute = '/add'
  }

  return (
    <>
      <header>
        <Nav buttonText={buttonText} buttonRoute={buttonRoute}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} />}/>
          <Route path='/addPark' element={<AddParkForm />}/>
          <Route path='/parks/:parkId' element={<ParkDetail parks={parks} />}/>
          <Route path='/parks/:parkId/addRide' element={<AddRideForm />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

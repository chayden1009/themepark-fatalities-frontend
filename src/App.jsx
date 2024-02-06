import Home from './components/Home'
import Nav from './components/Nav'
import AddParkForm from './components/AddParkForm'
import ParkDetail from './components/ParkDetail'
import AddRideForm from './components/AddRideForm'
import AddIncidentForm from './components/AddIncidentForm'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Client from './services/api'


function App() {
  const location = useLocation() 
  const [parks, setParks] = useState([])

  const fetchParks = async () => {
    try {
      const res = await Client.get('/parks');

      console.log(res.data);

      setParks(res.data);
    } catch (error) {
      console.error("Failed to fetch parks:", error);
    }
  }

  useEffect(() => { 
    fetchParks();
  }, [])

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  let buttonText
  let onClick
  if (location.pathname.startsWith('/parks/')) {
    buttonText = 'Add a Ride';
    onClick = toggleModal
  } else {
    buttonText = 'Add a Park';
    onClick = toggleModal
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <header>
        <Nav buttonText={buttonText} onClick={onClick}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} isModalVisible={isModalVisible} toggleModal={toggleModal}/>}/>
          <Route path='/addPark' element={<AddParkForm toggleModal={toggleModal} />} />
          <Route path='/parks/:parkId' element={<ParkDetail parks={parks} isModalVisible={isModalVisible} toggleModal={toggleModal}/>}/>
          <Route path='/parks/:parkId/rides' element={<AddRideForm />}/>
          <Route path='/parks/:parkId/rides/:rideId/incidents' element={<AddIncidentForm />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

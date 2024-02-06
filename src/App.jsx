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
  }, [parks])


  const handleChange = (e) => {
    setParkFormData({
      ...parkFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e, onSuccess) => {
    e.preventDefault();
    try {
      const res = await Client.post('/parks', parkFormData);
      const newPark = res.data;
      setParks(currentParks => [...currentParks, newPark]);
      setParkFormData({
        name: '',
        address: '',
        backgroundImage: '',
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Failed to add park:", error);
    }
  };

  const handleIncidentSubmit = async (e, onSuccess) => {
    e.preventDefault();
    try {
      const res = await Client.post('/incidents', e.response.data)
    } catch (error) {
      console.log(error)
    }
  }

  let buttonText, buttonRoute

  if (location.pathname.startsWith('/parks/')) {
    buttonText = 'Add a Ride';
  } else {
    buttonText = 'Add a Park';
  }

  const [isAddParkModalVisible, setIsAddParkModalVisible] = useState(false);

  const toggleModal = () => {
    setIsAddParkModalVisible(!isAddParkModalVisible);
  };
  
  return (
    <>
      <header>
        <Nav buttonText={buttonText} onAddParkClick={toggleModal}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} isAddParkModalVisible={isAddParkModalVisible} toggleModal={toggleModal}/>}/>
          <Route path='/addPark' element={<AddParkForm toggleModal={toggleModal} />} />
          <Route path='/parks/:parkId' element={<ParkDetail parks={parks} />}/>
          <Route path='/parks/:parkId/addRide' element={<AddRideForm />}/>
          <Route path='/parks/:parkId/addIncident' element={<AddIncidentForm parks={parks}/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

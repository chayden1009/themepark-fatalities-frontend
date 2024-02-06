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

  const [parkFormData, setParkFormData] = useState({
    name: '',
    address: '',
    backgroundImage: '',
  })

  const handleChange = (e) => {
    setParkFormData({
      ...parkFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
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
    } catch (error) {
      console.error("Failed to add park:", error);
    }
  };

  let buttonText, buttonRoute
  if (location.pathname.startsWith('/parks/')) {
    const parkId = location.pathname.split('/')[2];
    buttonText = 'Add a Ride';
    buttonRoute = `/parks/${parkId}/addRide`;
  } else {
    buttonText = 'Add a Park';
    buttonRoute = '/addPark';
  }

  const [isAddParkModalVisible, setIsAddParkModalVisible] = useState(false);

  const toggleAddParkModal = () => {
    setIsAddParkModalVisible(!isAddParkModalVisible);
  };
  

  return (
    <>
      <header>
        <Nav buttonText={buttonText} buttonRoute={buttonRoute} onAddParkClick={toggleAddParkModal}/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home parks={parks} />}/>
          <Route path='/' element={<Home parks={parks} isAddParkModalVisible={isAddParkModalVisible} toggleAddParkModal={toggleAddParkModal}/>}/>
          <Route path='/addPark' element={<AddParkForm handleChange={handleChange} handleSubmit={handleSubmit} formData={parkFormData} />} />
          <Route path='/parks/:parkId' element={<ParkDetail parks={parks} />}/>
          <Route path='/parks/:parkId/addRide' element={<AddRideForm />}/>
          <Route path='/parks/:parkId/addIncident' element={<AddIncidentForm />}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

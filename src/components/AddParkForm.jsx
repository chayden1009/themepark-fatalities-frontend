import { useState, useEffect } from 'react';
import Client from '../services/api';

const AddParkForm = ({ toggleModal }) => {

  const [parks, setParks] = useState([])

  const fetchParks = async () => {
    try {
      const res = await Client.get('/parks');
      setParks(res.data);
    } catch (error) {
      console.error("Failed to fetch parks:", error);
    }
  }

  useEffect(() => { 
    fetchParks();
  }, [parks])

  const [parkFormData, setParkFormData] = useState({
    name: '',
    address: '',
    backgroundImage: '',
  });

  const handleChange = (e) => {
    setParkFormData({
      ...parkFormData,
      [e.target.name]: e.target.value,
    });
  };

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
      toggleModal(); 
    } catch (error) {
      console.error("Failed to add park:", error);
    }
  };

  return (
    <div className="modal-backdrop" onClick={toggleModal}>
      <div className="add-park-container" onClick={(e) => e.stopPropagation()}>
        <h2>Add a New Park</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={parkFormData.name} onChange={handleChange} placeholder="Park Name" />
          <input type="text" name="address" value={parkFormData.address} onChange={handleChange} placeholder="Address" />
          <input type="text" name="backgroundImage" value={parkFormData.backgroundImage} onChange={handleChange} placeholder="Background Image URL" />
          <div className="button-container">
            <button type="submit">Add Park</button>
            <button type="button" onClick={toggleModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParkForm;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from '../services/api';

const AddRideForm = ({ toggleModal }) => {

  const { parkId } = useParams();
  const [rides, setRides] = useState([])
  const [rideFormData, setRideFormData] = useState({
    name: '',
    type: ''
  });

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await Client.get(`/parks/${parkId}/rides`);
        setRides(response.data);
      } catch (error) {
        console.error("Failed to fetch rides:", error);
      }
    };
    fetchRides();
  }, [parkId, rides]);

  const handleChange = (e) => {
    setRideFormData({
      ...rideFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Client.post(`/parks/${parkId}/rides`, rideFormData);
      const newRide = response.data
      setRides(prevRides => [...prevRides, newRide]);
      setRideFormData({
        name: '',
        type: ''
      });
      toggleModal(); 
    } catch (error) {
      console.error("Failed to add ride:", error);
    }
  };

  return (
    <div className="modal-backdrop" onClick={toggleModal}>
      <div className="add-park-container" onClick={(e) => e.stopPropagation()}>
        <h2>Add a Ride</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={rideFormData.name} onChange={handleChange} placeholder="Ride name" />
          <input type="text" name="type" value={rideFormData.type} onChange={handleChange} placeholder="Ride type" />
          <div className="button-container">
            <button type="submit">Add Ride</button>
            <button type="button" onClick={toggleModal}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRideForm;

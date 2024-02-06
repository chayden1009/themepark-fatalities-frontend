import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RideDetail from './RideDetail';
import AddRideForm from './AddRideForm';
import { Link } from 'react-router-dom';

const ParkDetail = ({ parks, isModalVisible, toggleModal }) => {
  const [park, setPark] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { parkId } = useParams();

  useEffect(() => {
    const selectedPark = parks.find(p => p._id.toString() === parkId);

    if (selectedPark) {
      setPark(selectedPark);
      setIsLoading(false); 
    } else {
      if (parks.length) {
        setIsLoading(false);
      }
    }
  }, [parkId, parks]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <h1>{park.name}</h1>
      <Link to="/">Back to Parks</Link>
      <div className="rides">
        {park.rides && park.rides.map(ride => (
          <div key={ride._id}>  
            <RideDetail ride={ride}/>
          </div>
        ))}
      </div>
      {isModalVisible && (
        <AddRideForm toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default ParkDetail;

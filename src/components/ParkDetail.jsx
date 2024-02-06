import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RideDetail from './RideDetail';

const ParkDetail = ({ parks }) => {
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
      <div className="rides">
        {park.rides && park.rides.map(ride => (
          <RideDetail key={ride._id} ride={ride} />
        ))}
      </div>
    </div>
  );
};

export default ParkDetail;

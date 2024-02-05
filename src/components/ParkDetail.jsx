import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RideDetail from './RideDetail'

const ParkDetail = ({ parks }) => {
  const [park, setPark] = useState(null)
  const { parkId } = useParams()

  useEffect(() => {
    const selectedPark = parks.find(p => p.id.toString() === parkId)
    setPark(selectedPark)
  }, [parkId, parks])

  return (
    <div>
      <h1>{park.name}</h1>
      <div className="rides">
        {park.rides.map(ride => (
          <RideDetail key={ride.id} ride={ride} />
        ))}
      </div>
    </div>
  )
}

export default ParkDetail

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"

const AddIncidentForm = () => {
  const { parkId } = useParams()

  const [park, setPark] = useState('')
  const [rides, setRides] = useState('')


  useEffect(() => {
    const getPark = async () => {
      let response = await Client.find({_id: parkId})
      setPark(response.data)
    }
    const getRides = async () => {
      let response = await Client.get('/rides')
      setRides(response.data)
    }
    getPark()
    getRides()
  }, [parkId])


  return (
    <form>
      <input type="text" name="headline" />
      <input type="date" name="date" />
      <input type="number" name="fatalities" />
      <input type="number" name="injuries" />
      <input type="text" name="description" />
      <select name="ride">
        {rides.map(ride => (
          <option key={ride.id} value={ride.id}>{ride.name}</option>
        ))}
      </select>
      <input type="text" name="park" value={park.name || ''} />
    </form>
  )
}

export default AddIncidentForm
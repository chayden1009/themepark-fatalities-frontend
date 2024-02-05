import { useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"

const AddIncidentForm = ({ parks }) => {
  const { parkId } = useParams()

  const [park, setPark] = useState('')
  const [rides, setRides] = useState('')


  useEffect(() => {
    const getPark = async () => {
      let response = await Client.find({_id: id})
      setPark(response.data)
    }
    const getRides = async () => {
      let response = await Client.get('/rides')
      setRides(response.data)
    }
    getPark()
  }, [])


  return (
    <form>
      <input type="text" name="name" />
      <input type="date" name="date" />
      <input type="number" name="fatalities" />
      <input type="number" name="injuries" />
      <input type="text" name="description" />
      <select name="ride">
        {rides.map(ride => (
          <option value={ride.id}>{ride.name}</option>
        ))}
      </select>
      <input type="text" name="park" value={park} />
    </form>
  )
}

export default AddIncidentForm
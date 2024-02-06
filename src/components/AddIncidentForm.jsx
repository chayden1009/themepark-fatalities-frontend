import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"

const AddIncidentForm = () => {
  const { parkId } = useParams()

  const [park, setPark] = useState('')
  const [rides, setRides] = useState('')


  useEffect(() => {
    const getPark = async () => {

      let response = await Client.get(`/parks/${parkId}`)

      setPark(response.data)
    }
    const getRides = async () => {
      try {
        let response = await Client.get('/rides')
        setRides(response.data)
      } catch (error) {
        console.log(error)
      } 
    }
    getPark()
    getRides()

  }, [])


  return (
    <div className="incident-container">
      <form className="incident-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" />
        <label htmlFor="fatalities">Fatalities</label>
        <input type="number" name="fatalities" />
        <label htmlFor="injuries">injuries</label>
        <input type="number" name="injuries" />
        <label htmlFor="description">Description</label>
        <input className="description-box" type="text-box" name="description" />
        { rides ? 
        <select name="ride">
          {rides.map(ride => ( <option value={ride._id}>{ride.name}</option>))}
        </select>
          : null
        }
        <input type="text" name="park" value={park} />
        <button type="submit">submit</button>
      </form>

    </div>
  )
}


export default AddIncidentForm
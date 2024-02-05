import { useState } from "react"
import { useParams } from "react-router-dom"
import Client from "../services/api"
const IncidentForm = () => {
  const { id } = useParams()

  const [park, setPark] = useState('')


  const useEffect(() => {
    const setState = async () => {
      let response = await Client.find({_id = id})
      setPark(response.data)
    }
    setState()
  }, [])


  return (
    <form>
      <input type="text" name="name" />
      <input type="date" name="date" />
      <input type="number" name="fatalities" />
      <input type="number" name="injuries" />
      <input type="text" name="description" />
      <select name="ride">
        {}
      </select>
    </form>
  )
}
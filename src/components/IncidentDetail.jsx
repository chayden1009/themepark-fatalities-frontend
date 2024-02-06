import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Client from '../services/api'


const IncidentDetail = () => {
    let { id } = useParams()

    const [incident, setIncident] = useState()

    useEffect(() => {
        const getIncident = async () => {
            let res = await Client.get(`incident/${id}`)
            setIncident(res.data)
        }
        getIncident()
    }, [id])

    return (
        <div className='detail'>
            <h2>Incident Details</h2>
            <Link to="/park">Back to Parks</Link>
            <div className="ride-name">
                <h2>{incident.name}</h2>
                <h4>{incident.date} at {incident.park} on {incident.ride}</h4>
            </div>
            <div>
                <h4>{incident.date}</h4>
                <h4>{incident.fatalities}</h4>
                <h4>{incident.injuries}</h4>
                <h4>{incident.description}</h4>
            </div>
        </div>
    )
}

export default IncidentDetail


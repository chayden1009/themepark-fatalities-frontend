import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Client from '../services/api'

const RideDetail = () => {
    let { id } = useParams()

    const [ride, setRide] = useState(null)

    useEffect(() => {
        const getRide = async () => {
            let res = await Client.get(`ride/${id}`)
            setRide(res.data)
        }
        getRide()
    }, [id])

    return (
        <div className='detail'>
            <h2>Ride Details</h2>
            <Link to="/park">Back to Parks</Link>
                <div className="ride-name">
                    <h2>{ride.name}</h2>
                </div>
                <div>
                    <h4>{ride.type}</h4>
                    <h4>{ride.incidents}</h4>
                </div>
        </div>
    )
}

export default RideDetail


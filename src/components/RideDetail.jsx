import IncidentDetail from './IncidentDetail'

const RideDetail = ({ride}) => {

    return (
        <div className='detail'>
            <div className="ride-container">
                <h2>{ride.name}</h2>
                <h4>({ride.type})</h4>
                <div className="rides">
                    {ride.incidents && ride.incidents.map(incident => (
                        <div key={incident._id}>  
                            <IncidentDetail incident={incident}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RideDetail


const IncidentDetail = ({ incident }) => {

    return (
        <div className='detail'>
            <div>
                <h4>{incident.headline}</h4>
                <p>{incident.date}</p>
                <p>{incident.fatalities}</p>
                <p>{incident.injuries}</p>
                <p>{incident.description}</p>
            </div>
        </div>
    )
}

export default IncidentDetail


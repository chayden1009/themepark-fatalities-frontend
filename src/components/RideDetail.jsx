const RideDetail = ({ ride }) => {
  
    return (
      <div className="ride">
        <h2>{ride.name}</h2>
        {/* Display incidents here */}
        <button>Drop an Incident</button>
      </div>
    )
  }
  
  export default RideDetail
  

import AddParkForm from "./AddParkForm"

const Home = ({ parks, toggleAddParkModal, isAddParkModalVisible }) => {
  
  return(
    <div className="themeParks">
      {parks.map(park => (
        <div key={park._id} style={{backgroundImage:`url("${park.backgroundImage}")`}} className="parkCard">
          <h2 className="parkName">{park.name}</h2>
        </div>
      ))}
      {isAddParkModalVisible && (
        <div className="modal">
          <div className="modalContent">
            <AddParkForm />
            <button onClick={toggleAddParkModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
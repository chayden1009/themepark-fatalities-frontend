import { Link } from "react-router-dom"
import AddParkForm from "./AddParkForm"

const Home = ({ parks, toggleModal, isModalVisible }) => {
  
  return(
    <div className="themeParks">
      {parks.map(park => (
        <Link key={park._id} to={`/parks/${park._id}`} style={{ textDecoration: 'none' }}>
          <div style={{ backgroundImage: `url("${park.backgroundImage}")` }} className="parkCard">
            <h2 className="parkName">{park.name}</h2>
          </div>
        </Link>
      ))}
      {isModalVisible && (
        <AddParkForm toggleModal={toggleModal}/>
      )}
    </div>
  )
}

export default Home
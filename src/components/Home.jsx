const Home = ({ parks }) => {
  console.log(parks)

  return(
    <div className="themeParks">
      {parks.map(park => (
        <div key={park.id} style={{backgroundImage:`url("${park.img}")`}} className="parkCard">
          <h2 className="parkName">{park.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home
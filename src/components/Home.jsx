const Home = ({ parks }) => {
  console.log(parks)

  return(
    <div className="themeParks">
      {parks.map(park => (
        <div key={park.id} style={{backgroundImage:`url(${park.img})`}} className="parkCard">
          <h1>{park.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Home
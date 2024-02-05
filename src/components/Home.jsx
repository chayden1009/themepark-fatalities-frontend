
const Home = ({ parks }) => {
  return(
    <div className="themeParks">
      {parks.map(park => (
        <a href="">
          <div key={park.id} style={{backgroundImage: `url("${park.img}")`, backgroundClip: 'padding-box'}} className="parkCard">
            <h2 className="parkName">{park.name}</h2>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Home
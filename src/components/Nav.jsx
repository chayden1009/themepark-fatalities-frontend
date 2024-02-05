import { NavLink } from 'react-router-dom'

const Nav = ({ buttonText, buttonRoute, onAddParkClick}) => {
    
  return (
    <nav>
        <NavLink to="/"><h1>Death Drop</h1></NavLink>
        <NavLink to={buttonRoute}><button onClick={() => onAddParkClick()}>{buttonText}</button></NavLink>
    </nav>
  )
}

export default Nav

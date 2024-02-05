import { NavLink } from 'react-router-dom'

const Nav = ({ buttonText, buttonRoute }) => {
    
  return (
    <nav>
        <NavLink to="/"><h1>Death Drop</h1></NavLink>
        <NavLink to={buttonRoute}><button>{buttonText}</button></NavLink>
    </nav>
  )
}

export default Nav

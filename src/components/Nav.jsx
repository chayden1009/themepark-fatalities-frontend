import { NavLink } from 'react-router-dom'

const Nav = ({ buttonText, onClick }) => {

  return (
    <nav>
      <NavLink to="/"><h1>Death Drop</h1></NavLink>
      <button onClick={onClick}>{buttonText}</button>
    </nav>
  );
};


export default Nav

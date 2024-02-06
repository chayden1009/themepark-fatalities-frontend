import { NavLink } from 'react-router-dom'

const Nav = ({ buttonText, onAddParkClick }) => {
  return (
    <nav>
      <NavLink to="/"><h1>Death Drop</h1></NavLink>
      <button onClick={onAddParkClick}>{buttonText}</button>
    </nav>
  );
};


export default Nav

import { Outlet, Link } from "react-router-dom"
import icon from '../assets/terminal.svg'
import './NavBar.css'

function NavBar() {
  return (
    <>
      <nav>
        <Link to="/">
        <img id='icon' src={icon}/>
        </Link>
        <div>
          <ul id='navbar'>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
      <Outlet/> 
    </>
  );
}

export default NavBar;
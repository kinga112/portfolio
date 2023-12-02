import { Outlet, Link } from "react-router-dom"
import icon from '../assets/terminal.svg'
import './NavBar.css'
import {useHookstate } from '@hookstate/core';
import {globalState} from '../pages/About'

function NavBar() {
  const state = useHookstate(globalState);
  return (
    <>
      <nav>
        <Link to="/">
          <img id='icon' src={icon}/>
        </Link>
        <div>
          <ul id='navbar'>
            <li><Link to="/about" className={state.get()} data-text="About"><span>About</span></Link></li>
          </ul>
        </div>
      </nav>
      <Outlet/> 
    </>
  );
}

export default NavBar;
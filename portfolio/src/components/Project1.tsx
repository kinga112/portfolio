import google_assistant from '../assets/google_assistant_logo.png'
import mbta from '../assets/mbta_logo.png'
import medium from '../assets/medium_logo.png'
import './Project1.css'
// import '../globals'
import './Glitch.css'
import {useHookstate } from '@hookstate/core';

import {globalState} from '../pages/About'

function Project1(){
  const state = useHookstate(globalState);
  return(
    <>
      <div id='project1'>
        <img id='project1-images' src={google_assistant}></img>
        <img id='project1-images' src={mbta}></img>
        <br/>
        <div id='project1-overlay'>
          <h3 aria-hidden="true" className={state.get()} data-text="MBTA Google Assistant Commands">
            <span>MBTA Google Assistant Commands</span>
          </h3>
          <div id='project1-text'>
            Built with python, read more here:
            <a href='https://medium.com/p/9d931e5017e5'>
                <img id='medium-logo' src={medium}></img>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project1
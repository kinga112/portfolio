import './Project2.css'
import {useHookstate } from '@hookstate/core';
import {globalState} from '../pages/About'

function Project2(){
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
  </style>
  const state = useHookstate(globalState);
  return(
      <>
        <div id='project2'>
          <div id='heading'>
            <span>
              Excursia
            </span>
          </div>
          <div id='project2-overlay'>
            <div id='top-overlay-text' aria-hidden="true" className={state.get()} data-text="Run the Unexpected">
              <span>Run the Unexpected</span>
            </div>
            <div id='bot-overlay-text'>
              Built with flutter, check it out:
              <a href='https://excursia.app'>
                <div id='link'> excursia.app </div>
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Project2
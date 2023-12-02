import './Project4.css'
import {useHookstate } from '@hookstate/core';
import {globalState} from '../pages/About'

function Project4(){
  const state = useHookstate(globalState);
  return(
      <>
        <div id='project4'>
          <div id='heading-4'>
            <span>
              C L I Q U 3
            </span>
          </div>
          <div id='project4-overlay'>
            <div id='top-overlay-text-4' aria-hidden="true" className={state.get()} data-text="Decentralized Messaging">
              <span>Decentralized Messaging</span>
            </div>
            <div id='bot-overlay-text'>
              Built with flutter, still under construction:
              <a href='https://cliqu3.com'>
                <div id='link-4'> cliqu3.com </div>
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Project4
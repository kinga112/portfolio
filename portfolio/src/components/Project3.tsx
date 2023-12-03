import './Project3.css'
import queue from '../assets/queue.png'
import {useHookstate } from '@hookstate/core';
import {globalState} from '../pages/About'

function Project3(){
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');
  </style>
  const state = useHookstate(globalState);
  return(
      <>
        <div id='project3'>
          <img className='top-overlay-image' src={queue}></img>
          <div id='heading-2'>
              Q
          </div>
          <div id='project3-overlay'>
            <div id='top-overlay-text-2' aria-hidden="true" className={state.get()} data-text="Shop Smarter, Wait Less!">
              <span>Shop Smarter, Wait Less!</span>
            </div>
            <div id='bot-overlay-text'>
              Built with flask, create a Q now:
              <a href='https://q.aldenwking.com'>
                <div id='link-2'> q.aldenwking.com </div>
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Project3
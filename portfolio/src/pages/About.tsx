import './About.css'
import '../components/Glitch.css'
import react from '../assets/react_logo.png'
import typescript from '../assets/typescript_logo.png'
import javascript from '../assets/javascript_logo.png'
import python from '../assets/python_logo.png'
import vue from '../assets/vue_logo.png'
import flutter from '../assets/flutter_logo.png'
import gcp from '../assets/gcp_logo.png'
import aws from '../assets/aws_logo.png'
import vercel from '../assets/vercel_logo.png'
import nginx from '../assets/nginx_logo.webp'
import postgre from '../assets/postgre_logo.png'
import graphql from '../assets/graphql_logo.png'
import group_photo from '../assets/roblealto_group_photo.jpg'
import lego from '../assets/lego_logo.png'
import lightsabers from '../assets/lightsabers.png'
import skis from '../assets/skis.png'
import batman from '../assets/batman.png'
import videogames from '../assets/videogames.png'
import flstudio from '../assets/flstudio_logo.png'
import fsociety from '../assets/fsociety2.gif'
import redsox from '../assets/redsox_logo.png'
import batsignal from '../assets/batsignal.webp'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Project4 from '../components/Project4'
import Timeline from '../components/Timeline'
import { MouseEventHandler } from 'react'
import { hookstate, useHookstate } from '@hookstate/core';
import { Link } from 'react-router-dom'

export const globalState = hookstate('');
export const batsignalState = hookstate('hidden');

function About() {
  const glitchState = useHookstate(globalState);
  const batState = useHookstate(batsignalState);

  const startGlitch: MouseEventHandler<HTMLDivElement> = () => {
    globalState.set('glitch layers')
  };

  const endGlitch: MouseEventHandler<HTMLDivElement> = () => {
    globalState.set('')
  };
  const showBatSignal: MouseEventHandler<HTMLDivElement> = () => {
    console.log('bat bat batman')
    batState.set('batsignal')
  };

  const hideBatSignal: MouseEventHandler<HTMLDivElement> = () => {
    console.log('hide it')
    batState.set('hidden')
  };

  return (
    <>
      <div id='main'>
        <div id='grid-wrapper'>
          <div id="one" className={glitchState.get()} data-text="My story begins 25 years ago. A creative boy who loves to 
            build legos and play in the dirt. I love the fresh salty air by the beach and the brisk 
            chills of the north. My curious mind taught me to explore, and think critically.&emsp;&emsp;&emsp;&emsp;&emsp;
            My love of Boston brought me to Wentworth Institute of Techology, where I received my Bachelors
            in Computer Science. The next four years in the Fenway area were thrilling and solidified all my
            thoughts of the beautiful city! &emsp;&emsp;&emsp;&emsp;&emsp;
            Those good times ended quickly after Covid struck where I finished my last semester at home. I was
            able to reconnect with highschool friends to keep my mind stable. Then not too long after I was able
            to land my first full time position as a Software Developer. After 3 years I was layed off, where I have
            now start a new journey to find something fresh!">
            <span>
              My story begins 25 years ago. A creative boy who loves to build legos and play in the dirt.
              I love the fresh salty air by the beach and the brisk chills of the north. My curious mind 
              taught me to explore, and think critically.
              <br/>
              <br/>
              My love of Boston brought me to Wentworth Institute of Techology, where I received my Bachelors
              in Computer Science. The next four years in the Fenway area were thrilling and solidified all my
              thoughts of the beautiful city!
              <br/>
              <br/>
              Those good times quickly ended after Covid struck where I finished my last semester at home. I was
              able to reconnect with highschool friends to keep my mind stable. Then not too long after I was able
              to land my first full time position as a Software Developer. After 3 years I was laid off, where I have
              now start a new journey to find something fresh!
            </span>
          </div>
          <div id="projects">
            <div id='projects-grid'>
              <Project1/>
              <Project2/>
              <Project3/>
              <Project4/>
            </div>
          </div>
          <div id="four">
          <img id='logos' src={redsox}></img>
            <img id='logos' src={lego}></img>
            <img id='logos' src={flstudio}></img>
            {/* <img id='logos' src={lightsabers}></img> */}
            {/* <img id='logos' className='batman' src={batman} onMouseEnter={showBatSignal} onMouseLeave={hideBatSignal}></img> */}
            <a href='https://mrrobot.fandom.com/wiki/Fsociety'>
              <img id='logos' src={fsociety} onMouseEnter={startGlitch} onMouseLeave={endGlitch}></img>
            </a>
            <img id='logos' src={videogames}></img>
            <img id='logos' src={skis}></img>
          </div>
          <div id="six">
            <Timeline/>
          </div>
          <div id="seven">
            <img id='logos' src={python}></img>
            <img id='logos' src={react}></img>
            <img id='logos' src={vue}></img>
            <img id='logos' src={flutter}></img>
            <img id='logos' src={javascript}></img>
            <img id='logos' src={typescript}></img>
            <img id='logos' className='batman' src={gcp}></img>
            <img id='logos' src={nginx}></img>
            <img id='logos' src={vercel}></img>
            <img id='logos' src={aws}></img>
            <img id='logos' src={postgre}></img>
            <img id='logos' src={graphql}></img>
            {/* <img id='logos' src={lego}></img>
            <img id='logos' src={lightsabers}></img>
            <img id='logos' className='batman' src={batman} onMouseEnter={showBatSignal} onMouseLeave={hideBatSignal}></img>
            <a href='https://mrrobot.fandom.com/wiki/Fsociety'>
              <img id='logos' src={fsociety} onMouseEnter={startGlitch} onMouseLeave={endGlitch}></img>
            </a>
            <img id='logos' src={videogames}></img>
            <img id='logos' src={skis}></img>
            <img id='logos' src={flstudio}></img>
            <img id='logos' src={redsox}></img> */}
          </div>
          <div id="mission">
            <div id='mission-grid'>
              <div id='mission-text'>
                    <Link to="/mission" id='fancy-link' className={glitchState.get()} data-text="Making an impact around the world">
                      <span>Making an impact around the world</span>
                    </Link>
              </div>
              <img id='mission-photo' src={group_photo}></img>
            </div>
          </div>
        </div>
        <div className={batState.get()}>
          <img src={batsignal}></img>
        </div>
      </div>
    </>
  )
}

export default About

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
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Project3 from '../components/Project3'
import Project4 from '../components/Project4'
import Timeline from '../components/Timeline'
import { MouseEventHandler } from 'react'
import { hookstate, useHookstate } from '@hookstate/core';
import { Link } from 'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'


export const globalState = hookstate('');
function About() {
  const glitchState = useHookstate(globalState);

  const startGlitch: MouseEventHandler<HTMLDivElement> = () => {
    let mobile = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobile = true;})(navigator.userAgent);
    if(mobile == false){
      globalState.set('glitch layers')
    }
  };

  const endGlitch: MouseEventHandler<HTMLDivElement> = () => {
    globalState.set('')
  };

  const size = useWindowSize();

  return (
    <>
      <div id='main'>
        <div id='grid-wrapper'>
          <div id="my-story" className={glitchState.get()} data-text="My story begins 25 years ago. A creative boy who loves to 
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
          <div id="skills">
          {size.width < 1200 &&
            <div id='slide'>
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
            </div>
            }
            {size.width < 1200 &&
            <div id='slide'>
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
            </div>
            }
                  
            {size.width > 1200 && <img id='logos' src={python}></img>}
            {size.width > 1200 &&<img id='logos' src={react}></img>}
            {size.width > 1200 &&<img id='logos' src={vue}></img>}
            {size.width > 1200 &&<img id='logos' src={flutter}></img>} 
            {size.width > 1200 &&<img id='logos' src={javascript}></img>}
            {size.width > 1200 &&<img id='logos' src={typescript}></img>}
            {size.width > 1200 && <br/> }
            {size.width > 1200 &&<img id='logos' className='batman' src={gcp}></img>}
            {size.width > 1200 &&<img id='logos' src={nginx}></img>}
            {size.width > 1200 &&<img id='logos' src={vercel}></img>}
            {size.width > 1200 &&<img id='logos' src={aws}></img>}
            {size.width > 1200 &&<img id='logos' src={postgre}></img>}
            {size.width > 1200 &&<img id='logos' src={graphql}></img>}
                  
          </div>
          <div id="projects">
            <div id='projects-grid'>
              <Project1/>
              <Project2/>
              <Project3/>
              <Project4/>
            </div>
          </div>
          <div id="hobbys">
            {size.width > 1200 && <div>
                <img id='logos' src={redsox}></img>
                <img id='logos' src={lego}></img>
                <img id='logos' src={flstudio}></img>
                <br></br>
                <a href='https://mrrobot.fandom.com/wiki/Fsociety'>
                  <img id='logos' src={fsociety} onMouseEnter={startGlitch} onMouseLeave={endGlitch}></img>
                </a>
                <img id='logos' src={videogames}></img>
                <img id='logos' src={skis}></img>
              </div>
            }
            {size.width < 1200 &&
            <div id='slide'>
              <img id='logos' src={redsox}></img>
              <img id='logos' src={lego}></img>
              <img id='logos' src={flstudio}></img>
              <a href='https://mrrobot.fandom.com/wiki/Fsociety'>
                <img id='logos' src={fsociety} onMouseEnter={startGlitch} onMouseLeave={endGlitch}></img>
              </a>
              <img id='logos' src={videogames}></img>
              <img id='logos' src={skis}></img>
              <img id='logos' className='batman' src={batman}></img>
              <img id='logos' src={lightsabers}></img>
            </div>
            }
            {size.width < 1200 &&
            <div id='slide'>
              <img id='logos' src={redsox}></img>
              <img id='logos' src={lego}></img>
              <img id='logos' src={flstudio}></img>
              <a href='https://mrrobot.fandom.com/wiki/Fsociety'>
                <img id='logos' src={fsociety} onMouseEnter={startGlitch} onMouseLeave={endGlitch}></img>
              </a>
              <img id='logos' src={videogames}></img>
              <img id='logos' src={skis}></img>
              <img id='logos' className='batman' src={batman}></img>
              <img id='logos' src={lightsabers}></img>
            </div>
            }
          </div>
          <div id="timeline">
            <Timeline/>
          </div>
          <div id="mission">
            <div id='mission-grid'>
              <div id='mission-text'>
                    <Link to="/mission" id='fancy-link' className={glitchState.get()} data-text="Making an impact around the world">
                      {size.width < 1200 && 
                      <span>
                        Making an impact around the world
                      </span>
                      }
                      {size.width > 1200 && 
                      <span>
                        Making an impact
                        <br/>
                        around the world
                      </span>
                      }
                    </Link>
              </div>
              <img id='mission-photo' src={group_photo}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

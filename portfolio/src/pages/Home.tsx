import { useTypewriter, Cursor } from 'react-simple-typewriter';
import image1 from '../assets/personal_image1_jpeg.jpg'
import image2 from '../assets/personal_image2_jpeg.jpg'
import image3 from '../assets/personal_image3_jpeg.jpg'
import image4 from '../assets/personal_image4_jpeg.jpg'
import image5 from '../assets/personal_image5_jpeg.jpg'
import image6 from '../assets/personal_image6_jpeg.jpg'
import image7 from '../assets/personal_image7_jpeg.jpg'
import image8 from '../assets/personal_image8_jpeg.jpg'
import image9 from '../assets/personal_image9_jpeg.jpg'
import linkedInLogo from '../assets/linkedIn_logo.png'
import mountains from '../assets/mountains.png'
import './Home.css'


function Home() {
  const [typeEffect] = useTypewriter({
    words: [' Alden King', ' a Software Developer', 'an Explorer', ' a Creator', 'a Skier'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 40,
    delaySpeed: 1000
  });

  return (
    <>
      <div>
        <img id='personal-images' className='img1' src={image1}></img>
        <img id='personal-images' className='img2' src={image2}></img>
        <img id='personal-images' className='img3' src={image3}></img>
        <img id='personal-images' className='img4' src={image4}></img>
        <img id='personal-images' className='img5' src={image5}></img>
        <img id='personal-images' className='img6' src={image6}></img>
        <img id='personal-images' className='img7' src={image7}></img>
        <img id='personal-images' className='img8' src={image8}></img>
        <img id='personal-images' className='img9' src={image9}></img>

        <div id='glass'>
          <h1>I am {typeEffect}<Cursor/></h1>
        </div>
      </div>

      <div id='middle-info'>
        <div id='middle-info-text'>
          Hello!
          <br></br>
          This portfolio is a testament to my journey — 
          <br></br>
          a canvas where the tracks of my skiing adventures converge with the 
          lines of code that define my craftsmanship. 
          <br></br>
          Join me on this odyssey of creation, where every project is a peak conquered, 
          and every line of code is a story waiting to be told. 
          <br></br>
          Welcome to a world where software development meets the art of exploration.
        </div>
        
      </div>


      <div id='bottom-info'>
        <div id='bottom-info-left'>
          Email Me : <code>kinga112@yahoo.com</code>
        </div>
        <div id='bottom-info-right'>
          <a href='https://www.linkedin.com/in/kinga5'>
            <img id='logo' src={linkedInLogo}></img>
          </a>
        </div>
        <img id='bottom-image' src={mountains}></img>
      </div>
    </>
  )
}

export default Home

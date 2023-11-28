import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');
      </style>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route index element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="projects" element={<Projects/>} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Navbar from './component/Navbar'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer'
import ScrollToTop from './pages/ScrollToTop'

function App() {

  return (
    <>
      <Navbar />
      {/* <ScrollToTop /> */}
      <Routes>
        <Route index element={ <Home />} />
        <Route path='*' element={ <NotFound/> } />
        <Route path='/skills' element={ <Skills />} />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App

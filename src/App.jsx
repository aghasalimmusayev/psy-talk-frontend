import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Layout from './layout/Layout'
import About from './pages/about/About'
import ScrollTop from './components/common/ScrollTop'
import OurServices from './pages/ourServices/OurServices'
import ServiceDetail from './pages/serviceDetail/ServiceDetail'
import PsychologistsPage from './pages/psychologistsPage/PsychologistsPage'
import Contact from './pages/contact/Contact'
import AboutPsychologist from './pages/aboutPsychologist/AboutPsychologist'

function App() {

  return (
    <>
      <ScrollTop />
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<OurServices />} />
          <Route path='/service' element={<ServiceDetail />} />
          <Route path='/psychologists' element={<PsychologistsPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutPsychologist' element={<AboutPsychologist />} />
        </Route >

      </Routes>
    </>
  )
}

export default App

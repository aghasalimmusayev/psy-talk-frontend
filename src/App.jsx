import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Layout from './layout/Layout'
import About from './pages/about/About'
import ScrollTop from './components/common/ScrollTop'
function App() {

  return (
    <>
      <ScrollTop />
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='/about' element={<About />} />
        </Route >

      </Routes>
    </>
  )
}

export default App

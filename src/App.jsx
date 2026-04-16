import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Layout from './layout/Layout'

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
        </Route >

      </Routes>
    </>
  )
}

export default App

import './App.css'
import { Route , Routes } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './page/Home'
import About from './page/About'
import ErrorPage from './components/Error'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about'  element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

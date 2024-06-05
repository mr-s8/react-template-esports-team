import './App.css'
import Home from './pages/Home'
import Players from './pages/Players'
import Events from './pages/Events'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/events' element={<Events />} />
            <Route exact path='/players' element={<Players />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
          <Footer></Footer>
        </Router>
      </div>

    </>
  )
}

export default App

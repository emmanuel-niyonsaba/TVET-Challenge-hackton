
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Sectors from './pages/Sectors'
import SuccessStories from './pages/SuccessStories'
import CarriesPathWays from './pages/CarriesPathWays'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <BrowserRouter>
     
    <Navbar/>
 
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sectors' element={<Sectors/>}></Route>
      <Route path='/successStories' element={<SuccessStories/>}></Route>
      <Route path='/carriesPathWays' element={<CarriesPathWays/>}></Route>
    </Routes>

    <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App

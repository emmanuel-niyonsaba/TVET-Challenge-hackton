
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Sectors from './pages/Sectors'
import SuccessStories from './pages/SuccessStories'
import CarriesPathWays from './pages/CarriesPathWays'
import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Beauty from './Sectors/Beauty'
import Ict from './Sectors/Ict'
import Constraction from './Sectors/constraction'
import Energy from './Sectors/Energy'
import Technical from './Sectors/Technical'
import Hospitality from './Sectors/Hosipitality'
import Art from './Sectors/Art'
import Agriculture from './Sectors/Agrculture'
import Transport from './Sectors/Transport'
import Manufacturing from './Sectors/Manufacturing'



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

      
      <Route path='/beauty' element={<Beauty/>}></Route>
      <Route path='/ict' element={<Ict/>}></Route>
      <Route path='/constraction' element={<Constraction/>}></Route>
      <Route path='/energy' element={<Energy/>}></Route>
      <Route path='/technical' element={<Technical/>}></Route>
      <Route path='/hospitality' element={<Hospitality/>}></Route>
      <Route path='/art' element={<Art/>}></Route>
      <Route path='/agriculture' element={<Agriculture/>}></Route>
      <Route path='/transport' element={<Transport  />}></Route>
      <Route path='/manufacturing' element={<Manufacturing  />}></Route>

      


    </Routes>

    <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App

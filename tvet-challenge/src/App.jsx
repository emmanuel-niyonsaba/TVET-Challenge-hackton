
import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Sectors from './pages/Sectors'
import SuccessStories from './pages/SuccessStories'
import CarriesPathWays from './pages/CarriesPathWays'

import Footer from './pages/Footer'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

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
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import AuthPage from './pages/auth/AuthPage.jsx'
import ProtectedRoute from './hooks/ProtectedRoute.jsx'
import GraduateCertificate from './pages/GraduateCertificate.jsx'
import NotFound from './pages/NotFound.jsx'
import PrivateSector from './pages/PrivateSectors.jsx'
import PrivateSectors from './pages/PrivateSectors.jsx'
import Protfolio from './pages/Protfolio.jsx'

function App() {

 
  return (
    <>
    <BrowserRouter>
     
    <Navbar/>
 
    <Routes>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/sectors' element={<ProtectedRoute><Sectors/></ProtectedRoute>}></Route>
      <Route path='/successStories' element={<SuccessStories/>}></Route>
      <Route path='/carriesPathWays' element={<CarriesPathWays/>}></Route>
     
      <Route path='/auth' element={<AuthPage/>}>
         <Route index element={<Login/>}/>
         <Route path='signup' element={<Signup/>}/>
      </Route>
      
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
      <Route path='/profile' element={<GraduateCertificate  />}></Route>
      <Route path='/privateSectors' element={<PrivateSectors  />}></Route>
      <Route path='/protfolio' element={<Protfolio  />}></Route>

      


    </Routes>

    <Footer/> 
    </BrowserRouter>
    {/* <GetStarted /> */}
    </>
  )
}

export default App

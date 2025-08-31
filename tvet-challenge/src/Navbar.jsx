

 import { Link } from "react-router-dom"
const Navbar =()=>{
    return(
        <>
        <div className=" flex justify-between p-6 text-blue-700  items-center">
            <div>
               <h1>Log</h1> 
            </div>
            <div className=' flex justify-between gap-5 items-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sectors">Sectors</Link>
            <Link to="/successStories">Succes Stories</Link>
            <Link to="/carriesPathWays">Carries Path Ways</Link>
            <Link to="" className=" bg-green-500 rounded-2xl text-white font-bold p-3">Get Started</Link>
            
            </div>
        </div>
        </>
    )
}
export default Navbar
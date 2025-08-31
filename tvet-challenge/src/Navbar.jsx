

 import { Link } from "react-router-dom"
const Navbar =()=>{
    return(
        <>
        <div className=" flex justify-between p-6">
            <div>
               <h1>Log</h1> 
            </div>
            <div className=' flex justify-between gap-5'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sectors">Sectors</Link>
            <Link to="/successStories">Succes Stories</Link>
            <Link to="/carriesPathWays">Carries Path Ways</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar
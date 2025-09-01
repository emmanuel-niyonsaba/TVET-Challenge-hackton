import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Footer = () => {
    return (
        <>
        <div className="  bg-gray-200 ">

            <div className=" bg-gray-200 p-3 flex justify-around items-center">
                <div>
                    <h2 className=" font-bold">Usefull links</h2>
                    <p>Subscribe to our newsletter and receive the latest <br />
                        news about our products and services!</p>
                </div>
                
                    <ul className=" space-y-3">
                    <h1 className="font-bold"> Usefull links</h1>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/sectors">Sectors</Link>
                        </li>
                        <li>
                            <Link to="/successStories">Success Stories</Link>
                        </li>
                        <li>
                            <Link to="/carriesPathWays">Career Paths</Link>
                        </li>
                    </ul>
                    <ul className="  space-y-3">
                        <h2 className=" font-bold"> Our service</h2>
                        <li>Connect Graduates</li>
                        <li>Internships Offer</li>
                        <li>Data management</li>
                        <li>Portfolio </li>
                        <li>Boost you awareness </li>
                    </ul>
                    <div>

                    </div>

               
            </div>
            <div className=" flex justify-between p-5 items-center">
                <div className=" space-y-3">
                   <div className=" space-x-3">
                   <Link to="https://www.instagram.com/rtb_rwanda/">
                    <InstagramIcon/>
                   </Link>
                   <Link to="https://x.com/RTB_Rwanda">
                    <XIcon/>
                   </Link>


                 <Link to="https://www.youtube.com/@rwandatvetboard">
                 
                    <YouTubeIcon/>
                    </Link>
                    <LinkedInIcon/>
                    </div>
                    <p>@rtb-rwanda</p>
                </div>
                <Link to="/">
                <button className=" bg-green-500 text-white p-2 rounded-[10px]">Back to home <ArrowUpwardIcon/> </button>
                </Link>
            </div>
            <p  className=" items-center p-2     flex justify-self-center">rtb-Rwanda &copy; 2025 All copy right reserved</p>
        </div>

        </>
    )
}

export default Footer
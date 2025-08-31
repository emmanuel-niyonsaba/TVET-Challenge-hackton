import image1 from '../assets/sector-photos/floating gears.png'
import image2 from '../assets/sector-photos/old computer with stickers.png'
import image3 from '../assets/sector-photos/man.png'
import image4 from '../assets/sector-photos/tractor.png'
import { FaSearch } from "react-icons/fa";



const Sectors = () => {
  return (
    <>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-items-center p-10">
  <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300" src={image1} alt="" />
  <img className="w-16 h-18 sm:w-20 sm:h-22 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300" src={image2} alt="" />
  <img className="w-16 h-18 sm:w-20 sm:h-22 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300" src={image3} alt="" />
  <img className="w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-26 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300" src={image4} alt="" />
</div>



      <div className="mx-auto text-center text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 py-12">
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">Sectors</p>
        <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-2xl mb-8">
          TVET and skills policies include formal, non-formal and informal vocational learning, workplace and work-based learning, and other learning opportunities in the formal and informal economies.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none transition group-focus-within:scale-110" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 shadow-md focus:shadow-2xl focus:border-white outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 bg-white text-gray-800"
          />
        </div>
      </div>


  {/* done with paccu..... */}


 <div>
     <div>
         <img src={} alt="" />
     </div>
 </div>






    </>
  )
}
export default Sectors

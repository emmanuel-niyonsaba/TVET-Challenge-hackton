import image1 from '../assets/sector-photos/floating gears.png'
import image2 from '../assets/sector-photos/old computer with stickers.png'
import image3 from '../assets/sector-photos/man.png'
import image4 from '../assets/sector-photos/tractor.png'
import { FaSearch } from "react-icons/fa";
import makeup from '../assets/sector-photos/Makeup.png'
import ITSTUDENT from '../assets/sector-photos/IT-STUDENT.png'

import Manufacuring from '../assets/sector-photos/Manufacuring.png'
import agriculture from '../assets/sector-photos/agriculture.png'
import craft from '../assets/sector-photos/craft.png'
import hospitality from '../assets/sector-photos/hospitality.png'
import Technicalservice from '../assets/sector-photos/Technicalservice.png'
import energy from '../assets/sector-photos/energy.png'
import engeneering from '../assets/sector-photos/engeneering.png'
import transport from    '../assets/sector-photos/Transport.png'



const Sectors = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 justify-items-center p-10">
        <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-bounce" src={image1} alt="" />
        <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-pulse" src={image2} alt="" />
        <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-bounce" src={image3} alt="" />
        <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105 transition duration-300 animate-pulse" src={image4} alt="" />
      </div>

      <div className="mx-auto text-center text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 px-6 py-12">
        <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">Sectors</p>
        <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-2xl mb-8">
          TVET and skills policies include formal, non-formal and informal vocational learning, workplace and work-based learning, and other learning opportunities in the formal and informal economies.
        </p>

        <div className="relative w-full max-w-md mx-auto">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none transition duration-300 group-focus-within:scale-110" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-300 shadow-md focus:shadow-2xl focus:border-white outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 bg-white text-gray-800"
          />
        </div>
      </div>

      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Beauty & Cosmetics
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={makeup} alt="Beauty & Cosmetics" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                ICT and Multimedia
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={ITSTUDENT} alt="Information Technology" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Construction and Building Services
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={engeneering} alt="Agriculture" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Energy
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={energy} alt="Engineering" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Technical Science
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={Technicalservice} alt="Computer Science" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>


            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Hospitality and Tourism
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={hospitality} alt="Human Resources" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Art and Craft
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={craft} alt="Healthcare" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Agriculture and Food Processing
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={agriculture} alt="Manufacturing" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

        
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Transport and Logistics
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={transport} alt="Education" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="relative group w-full max-w-lg mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
                Manufacturing and Mining
              </h3>
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 hover:scale-105">
                <img className="w-full h-64 sm:h-72 object-cover transition-transform duration-1000 group-hover:scale-110" src={Manufacuring} alt="Finance" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out bg-white/98 backdrop-blur-md">
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <a href="/sectors" className="inline-block bg-green-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                      View Sector
                    </a>
                  </div>
                </div>
              </div>
            </div>

           
              
        
          </div>
        </div>
      </div>
    </>
  )
}

export default Sectors


import { useState, useEffect } from 'react'

import hos1 from '../assets/sector-photos/hospitality/hos1.jpg'
import hos2 from '../assets/sector-photos/hospitality/hos2.jpg'
import hos3 from '../assets/sector-photos/hospitality/hos3.jpg'
import hos4 from '../assets/sector-photos/hospitality/hos4.jpg'
import hos5 from '../assets/sector-photos/hospitality/hos5.jpg'
import hos6 from '../assets/sector-photos/hospitality/hos6.jpg'
import hos7 from '../assets/sector-photos/hospitality/hos7.jpg'



const AnimatedSlideshow = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-2xl shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
         
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          

          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-800 font-medium text-sm">
                {image.caption}
              </p>
            </div>
          </div>
        </div>
      ))}

    
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

  
      <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-white transition-all ease-linear"
          style={{
            width: `${((currentIndex + 1) / images.length) * 100}%`,
            transitionDuration: `${interval}ms`
          }}
        />
      </div>
    </div>
  )
}


const AnimatedBarChart = ({ data, title, maxValue }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const getBarHeight = (value) => {
    return (value / maxValue) * 100
  }

  const formatValue = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`
    }
    return value.toString()
  }

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">{title}</h3>
      <div className="flex items-end justify-between h-64 bg-gray-50 rounded-lg p-4 relative">
        
  
        <div className="absolute left-1 top-4 h-56 flex flex-col justify-between text-xs text-gray-500">
          <span>{formatValue(maxValue)}</span>
          <span>{formatValue(maxValue * 0.75)}</span>
          <span>{formatValue(maxValue * 0.5)}</span>
          <span>{formatValue(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

     
        <div className="flex items-end justify-center w-full h-full ml-8">
          {data.map((item, index) => (
            <div key={item.name} className="flex flex-col items-center flex-1 h-full justify-end mx-1">
              
            
              <div className={`text-xs font-medium text-gray-700 mb-1 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}>
                {formatValue(item.value)}
              </div>


              <div 
                className={`w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg transition-all duration-1000 ease-out shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-500 cursor-pointer transform hover:scale-105`}
                style={{
                  height: isVisible ? `${getBarHeight(item.value)}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              >
         
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-t-lg"></div>
              </div>
          
              <div className="text-xs text-gray-600 mt-2 text-center font-medium">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


const Hospitality = ({ agriculturalStats, slideshowImages }) => {

  const defaultData = {
    production: [
{ name: 'Hotels', value: 2800 },
{ name: 'Restaurants', value: 2200 },
{ name: 'Tourist Sites', value: 1800 },
{ name: 'Guided Tours', value: 2400 },
{ name: 'Transport Services', value: 3000 }
    ],
    yield: [
{ name: 'Hotels', value: 2800 },
{ name: 'Restaurants', value: 2200 },
{ name: 'Tourist Sites', value: 1800 },
{ name: 'Guided Tours', value: 2400 },
{ name: 'Transport Services', value: 3000 }
    ],
    area: [
{ name: 'Hotels', value: 2800 },
{ name: 'Restaurants', value: 2200 },
{ name: 'Tourist Sites', value: 1800 },
{ name: 'Guided Tours', value: 2400 },
{ name: 'Transport Services', value: 3000 }
    ]
  }


  const defaultImages = [
  {
    src: hos1,
    alt: "Volcanoes National Park in Musanze",
    caption: "July 22, 2025 - Tourists visiting Volcanoes National Park observing gorillas and scenic landscapes"
  },
  {
    src: hos2,
    alt: "Kigali City cultural tour",
    caption: "Cultural tour in Kigali showcasing Rwandan heritage sites and local experiences"
  },
  {
    src: hos3,
    alt: "Lake Kivu waterfront",
    caption: "Lake Kivu tourism highlighting boat rides, lakeside resorts, and scenic views"
  },
  {
    src: hos4,
    alt: "Akagera National Park safari",
    caption: "Safari tour in Akagera National Park experiencing wildlife and guided excursions"
  },
  {
    src: hos5,
    alt: "Nyungwe Forest canopy walk",
    caption: "Tourists enjoying Nyungwe Forest canopy walk exploring Rwanda's rainforest biodiversity"
  }
]


  const data = agriculturalStats || defaultData
  const images = slideshowImages || defaultImages


  const maxProduction = Math.max(...data.production.map(item => item.value))
  const maxYield = Math.max(...data.yield.map(item => item.value))
  const maxArea = Math.max(...data.area.map(item => item.value))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Energy Sector
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
The Rwanda Hospitality Association (RHA) is one of the six Associations that make up the Chamber of Tourism which is one of the ten professional Chambers that currently exist under the umbrella of the Rwanda Private Sector Federation (PSF).</p>        </div>

    
        <div className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Rwanda's Hospitality and tourism sector
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                      A few hoteliers by then across the country convened and formed the Rwanda Hotels, Bars and Restaurants Association (RHRA) which started with a membership composition of 10-20 members by 2002. </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold mb-2">49.5%</div>
                    <div className="text-green-100 text-sm font-medium">Population Employment</div>
                    <div className="text-green-200 text-xs mt-1">Hospitality and Tourism  workforce</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold mb-2">80%</div>
                    <div className="text-emerald-100 text-sm font-medium">GDP Contribution</div>
                    <div className="text-emerald-200 text-xs mt-1">National economic output</div>
                  </div>
                </div>

          
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-gray-800 mb-2">Major Export Products:</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Coffee', 'Tea', 'Livestock Products', 'Cereals & Grains'].map((product) => (
                      <span key={product} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

       
            <div>
              <AnimatedSlideshow images={images} interval={5000} />
            </div>
          </div>
        </div>

    
        <div className="space-y-8">
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Production Analysis
                </h2>
                <div className="w-12 h-1 bg-green-500 rounded"></div>
              </div>
              <AnimatedBarChart 
                data={data.production} 
                title="Production (tons)" 
                maxValue={maxProduction}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Yield Analysis
                </h2>
                <div className="w-12 h-1 bg-emerald-500 rounded"></div>
              </div>
              <AnimatedBarChart 
                data={data.yield} 
                title="Yield (kg/ha)" 
                maxValue={maxYield}
              />
            </div>


            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 lg:col-span-2 xl:col-span-1">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Area Coverage
                </h2>
                <div className="w-12 h-1 bg-teal-500 rounded"></div>
              </div>
              <AnimatedBarChart 
                data={data.area} 
                title="Area (hectares)" 
                maxValue={maxArea}
              />
            </div>
          </div>


          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Musanze - Rushashi  Region
                </h2>
                <div className="w-20 h-1 bg-emerald-500 rounded mb-6"></div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
The mission of Rwanda Hospitality Association (RHA) is to represent the common interest of members in the Hospitality Industry through lobby for industry friendly legislation, promotion of quality products and services, offering value added member services, and to be the resource for industry information and education to our members, their employees, government, media, and all other interested parties.</p>                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {data.production.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-green-700">Total Production</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">
                      {data.area.reduce((sum, item) => sum + item.value, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-emerald-700">Total Area</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={hos6} 
                    alt="Water Energy  in Bugesera - Ntarama region" 
                    className="w-full h-auto object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="mt-4 bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                  <p className="text-emerald-800 font-medium text-sm">
                    📍 At Musanze- rushashi
                  </p>
                  <p className="text-emerald-700 text-sm mt-1">
To position as the advocate of all operators in Hospitality related businesses by being key resource for reliable information and capacity building for the Hospitality & Tourism Industry in Rwanda.
    </p>
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">👨‍🚒</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sustainable Hospitality and Tourism</h3>
            <p className="text-gray-600 text-sm">Promoting eco-friendly Hospitality and tourism practices</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth Analytics</h3>
            <p className="text-gray-600 text-sm">Data-driven insights for sector development</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Technology</h3>
            <p className="text-gray-600 text-sm">Integrating technology in Hospitality and tourism</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hospitality





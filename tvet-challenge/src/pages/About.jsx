import React from 'react'
import job from '../assets/about-photos/job.jpg'
import improve from '../assets/about-photos/improve.jpg'
import cap from '../assets/about-photos/cap.png'
import { Link } from "react-router-dom"
import looking from '../assets/about-photos/Looking1.png'
import target from '../assets/about-photos/target11.png'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { ModelTraining } from '@mui/icons-material'
import ComputerIcon from '@mui/icons-material/Computer';
import ConstructionIcon from '@mui/icons-material/Construction';
import AgricultureIcon from '@mui/icons-material/Agriculture';
const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-600 text-white">
                <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                    <div className="text-center">
                        <div className="inline-block bg-blue-500 bg-opacity-50 px-4 py-2 rounded-full text-sm mb-6">
                            Government Office - Ministry of Education
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6">
                            Rwanda TVET Board (RTB)
                        </h1>

                        <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                            Rwanda TVET Board (RTB) is a government office under the Ministry of Education that helps guide, support, and promote with the aim of promoting quality education in technical and vocational education and training from level 1 to level 5. It covers different sectors like ICT, construction, and agriculture.
                        </p>

                        <Link
                            to="https://www.rtb.gov.rw/"
                            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            Learn more...
                        </Link>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Benefits of TVET
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
                    <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                        Discover how Technical and Vocational Education and Training transforms lives and builds careers
                    </p>
                </div>

                {/* Benefits Cards - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Card 1 - Job Ready Training */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="p-6">

                      
                                   <RocketLaunchIcon/>
                          

                            <img
                                src={job}
                                alt="Job Ready Training"
                                className="w-full h-48 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
                            />

                            <div className="bg-green-500 rounded-lg p-6">
                                <p className="font-bold text-white text-base leading-relaxed">
                                    "TVET enables faster and more affordable entry into the workforce by offering job-ready, shorter-duration training aligned with current industry needs."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 - Practical Skills */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="p-6">
                           
                        <CastForEducationIcon/>
                            <img
                                src={improve}
                                alt="Skill Development"
                                className="w-full h-48 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
                            />

                            <div className="bg-blue-500 rounded-lg p-6">
                                <p className="font-bold text-white text-base leading-relaxed">
                                    "TVET equips learners with practical skills through formal, non-formal, and work-based training, preparing them for both formal and informal job markets."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Quality Training */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
                        <div className="p-6">

                            <ModelTraining/>

                            <img
                                src={cap}
                                alt="Quality Training"
                                className="w-full h-48 object-cover rounded-lg mb-6 hover:scale-105 transition-transform duration-300"
                            />

                            <div className="bg-purple-500 rounded-lg p-6">
                                <p className="font-bold text-white text-base leading-relaxed">
                                    "Training Management Department is tasked with ensuring quality and promoting best practices in TVET programs. It focuses mainly on standards and excellence in education delivery."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                    <h1 className=' text-3xl font-bold p-6 '> Why this platform Exist</h1>
                <div className=' grid grid-cols-2 gap-4 '>
                    <div className=' border-2 border-blue-500 p-4 rounded-[20px]'>
                        <div className=' flex justify-between items-center space-y-3'>
                            <h1 className=' text-2xl font-bold text-blue-600'>Private Sectors </h1>
                            <img src={looking} alt="" className=' w-8' />
                        </div>
                        <div>
                            <p>Private sector and industry stakeholders are not sufficiently engaged or investing in skills development</p>
                        </div>
                    </div >
                    <div className=' border-2 border-blue-500 p-4 rounded-[20px]'>
                        <div className=' flex justify-between items-center'>
                            <h1 className=' text-2xl font-bold text-blue-600'>This platform is here </h1>
                            <img src={target} alt="" className=' w-8' />
                        </div>
                        <div>
                            <p>Private sector and industry stakeholders are not sufficiently engaged or investing in skills development</p>
                        </div>
                    </div>
                    <div className=' border-2 border-blue-500 p-4 rounded-[20px]'>
                        <div className=' flex justify-between items-center'>
                            <h1 className=' text-2xl font-bold text-blue-600'>Graduates</h1>
                            <img src={looking} alt="" className=' w-8' />
                        </div>
                        <div>
                            <p>Apart for the  a lot of TVET Benefits
                                Private sector and industry stakeholders are not sufficiently engaged or investing in skills development.</p>
                        </div>
                    </div>
                    <div className=' border-2 border-blue-500 p-4 rounded-[20px]'>
                        <div className=' flex justify-between items-center'>
                            <h1 className=' text-2xl font-bold text-blue-600'>Apart for the  a lot of TVET Benefits</h1>
                            <img src={target} alt="" className=' w-8' />
                        </div>
                        <div>
                            <p>Help young people know more about the benefits of TVET and what it can give them.
                                Teach youth about the chances and skills they can get from TVET.
                                Show young people how TVET can help them build a better future.</p>
                        </div>
                    </div>
                </div>

                {/* Why Choose TVET Section */}
                <div className="mt-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                            Why Choose TVET Education?
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                              
                                <h4 className="font-semibold text-lg mb-3 text-gray-900">Industry-Aligned</h4>
                                <p className="text-gray-600 leading-relaxed">Programs designed to match current market demands and employer expectations</p>
                            </div>

                            <div className="text-center">
                               
                                <h4 className="font-semibold text-lg mb-3 text-gray-900">Practical Focus</h4>
                                <p className="text-gray-600 leading-relaxed">Hands-on learning with real-world applications and industry-standard equipment</p>
                            </div>

                            <div className="text-center">
                               
                                <h4 className="font-semibold text-lg mb-3 text-gray-900">Quality Standards</h4>
                                <p className="text-gray-600 leading-relaxed">Maintained excellence across all TVET programs with rigorous quality control</p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-12">
                            <Link
                                to="/sectors"
                                className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                            >
                                Explore TVET Programs
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Sectors Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            TVET Sectors We Cover
                        </h3>
                        <div className="w-16 h-1 bg-green-500 mx-auto rounded"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <ComputerIcon/>
                                </div>
                            <h4 className="font-semibold text-lg text-gray-900 mb-2">ICT</h4>
                            <p className="text-gray-600 text-sm">Information and Communication Technology programs</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                <ConstructionIcon/>
                            </div>
                            <h4 className="font-semibold text-lg text-gray-900 mb-2">Construction</h4>
                            <p className="text-gray-600 text-sm">Building and construction trades training</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                              <AgricultureIcon/>
                            </div>
                            <h4 className="font-semibold text-lg text-gray-900 mb-2">Agriculture</h4>
                            <p className="text-gray-600 text-sm">Agricultural and farming technology programs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
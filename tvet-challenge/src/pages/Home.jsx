import { useEffect, useState } from 'react';
import firstImg from '../assets/landingPage/firstImg.png'
import secondImg from '../assets/landingPage/secondImg.jpg'
import thirdImg from '../assets/landingPage/thirdImg.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import firstAd from '../assets/landingPage/firstAd.png';
import trainer from '../assets/landingPage/trainer1.png'
import secondAd from '../assets/landingPage/secondAd.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import darius from '../assets/landingPage/darius.jpg'
import janvier from '../assets/landingPage/janvier.jpg'
import merci from '../assets/landingPage/merci.jpg'
import muhoza from '../assets/landingPage/muhoza.jpg'
import GetStarted from './GetStarted';
const Home = () => {
    const slides = [
        <div className='w-full relative'>
            <img src={firstImg} alt="" className='w-full h-[85vh] object-cover brightness-60' />
            <div className='absolute inset-0 flex flex-col justify-center p-4 space-y-20'>
                <div className='w-2/3 mt-30'>

                    <p className='poppins-extralight text-white text-3xl'>
                        “More than 60% of students
                        who graduate from
                        technical, vocational, and practical training immediately get a job.”
                    </p>
                </div>
                <div className='w-40 h-15 border-[2px] border-white flex flex-row items-center'>
                    <p className='text-white flex items-center p-4'>Learn more</p>
                    <ArrowRightAltIcon className='text-white' />
                </div>
            </div>
        </div>, <div className='w-full relative'>
            <img src={secondImg} alt="" className='w-full h-[85vh] object-cover brightness-60' />
            <div className='absolute inset-0 flex flex-col justify-center p-4 space-y-20'>
                <div className='w-2/3 mt-30'>
                    <p className='poppins-extralight text-white text-3xl'>
                        “TVET equips learners with practical skills through formal, non-formal,
                        and work-based training, preparing them for both formal and informal job markets.”
                    </p>
                </div>
                <div className='w-40 h-15 border-[2px] border-white flex flex-row items-center'>
                    <p className='text-white flex items-center p-4 poppins-extralight'>Learn more</p>
                    <ArrowRightAltIcon className='text-white' />
                </div>
            </div>
        </div>, <div className='w-full relative'>
            <img src={thirdImg} alt="" className='w-full h-[85vh] object-cover brightness-60' />
            <div className='absolute inset-0 flex flex-col justify-center p-4 space-y-20'>
                <div className='w-2/3 mt-30'>
                    <p className='poppins-extralight text-white text-3xl'>
                        “TVET enables faster and more affordable entry into the workforce by
                        offering job-ready, shorter-duration training aligned with current industry needs.”
                    </p>
                </div>
                <div className='w-40 h-15 border-[2px] border-white flex flex-row items-center'>
                    <p className='text-white flex items-center p-4'>Learn more</p>
                    <ArrowRightAltIcon className='text-white' />
                </div>
            </div>
        </div>];
    const [slide, setSlides] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSlides((p) => (p + 1) % slides.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])
    return (
        <>
            <div className='mx-auto flex flex-col space-y-5'>
                <div className='w-full relative h-[85vh]'>
                    {slides.map((divs, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full transition-opacity duration-2000 ${index === slide ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            {divs}
                        </div>
                    ))}
                </div>
                <div className='w-full p-4 flex flex-col space-y-3'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-2xl poppins-extralight w-full'>Announcements</p>
                        <ChevronRightIcon className='text-3xl text-black' />
                    </div>
                    <div className='w-full flex flex-row space-x-3 h-[80vh]'>
                        <div className="w-1/2 text-xl bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-2xl p-4 flex flex-col items-center text-center h-full animate-pulse">
                            <h1 className="font-bold poppins-extralight mb-4 ">
                                ✨ 🚀 Ready to Kick-Start Your ICT Career? ✨
                            </h1>

                            <p className="poppins text-xl mb-3">
                                💼 XXX Company is thrilled to welcome passionate Web Developers to join our growing team!
                            </p>

                            <h2 className="font-semibold mb-3">
                                👩‍💻 What We’re Looking For:
                            </h2>

                            <ul className="flex flex-col gap-2 mb-3">
                                <li>🌐 Web Development skills</li>
                                <li>🎨 UI/UX Design knowledge</li>
                                <li>🗣️ Great Communication skills</li>
                            </ul>

                            <p className="mb-4">
                                ✍️ Even if you’ve only taken ICT short courses — you’re still encouraged to apply!
                            </p>

                            <p className="font-semibold mb-6">
                                "We believe passion and determination matter more than the length of your studies."
                            </p>

                            <span className="text-lg font-medium">
                                👉 If you’re curious, creative, and eager to grow, this opportunity is made for YOU!
                            </span>
                        </div>


                        <div className='w-1/2 flex flex-row space-x-3'>
                            <div className='relative w-1/2 hover:cursor-pointer hover:animate-pulse'>
                                <img src={firstAd} alt="" className='w-full h-full object-cover rounded-lg' />
                                <div className='absolute inset-0  px-2'>
                                    <button className='bg-[#00c951] text-white p-2  rounded-sm mt-3 ml-45'>Enroll Now</button>
                                </div>
                            </div>
                            <div className='relative w-1/2 hover:cursor-pointer hover:animate-pulse'>
                                <img src={secondAd} alt="" className='w-full h-full object-cover rounded-lg' />
                                <div className='absolute inset-0'>
                                    <button className='bg-[#00c951] text-white p-2  rounded-sm mt-3 ml-45'>Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col space-y-5 px-4'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-2xl poppins-extralight w-full'>Numbers</p>
                        <ChevronRightIcon className='text-3xl text-black' />
                    </div>
                    <div className='w-full flex flex-row justify-around items-center'>
                        <div className='flex flex-col space-y-4 items-center'>
                            <h1 className='text-[#00c951] text-3xl font-bold'>238</h1>
                            <p className='poppins'>Graduates</p>
                        </div>
                        <div className='flex flex-col space-y-4 items-center'>
                            <h1 className='text-[#00c951] text-3xl font-bold'>248</h1>
                            <p className='poppins'>Internships</p>
                        </div>
                        <div className='flex flex-col space-y-4 items-center'>
                            <h1 className='text-[#00c951] text-3xl font-bold'>68</h1>
                            <p className='poppins'>Active jobs</p>
                        </div>
                        <div className='flex flex-col space-y-4 items-center'>
                            <h1 className='text-[#00c951] text-3xl font-bold'>118</h1>
                            <p className='poppins'>Private Sectors</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col space-y-5 px-4'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-2xl poppins-extralight w-full'>Testimonies</p>
                        <ChevronRightIcon className='text-3xl text-black' />
                    </div>
                    <div className='flex flex-row space-x-5 w-full  overflow-x-auto scrollbar-hide p-6'>
                        <div className='w-[400px] bg-[#fef7ff] p-3 flex flex-col border-[1px] border-[#cac4d0] rounded-lg shadow-2xl space-y-4 shrink-0 cursor-pointer'>
                            <div className='flex flex-row justify-around space-x-5'>
                                <div className=' h-10 bg-[#eaddff] rounded-full p-4 flex items-center'>
                                    <p className='text-2xl text-[#4f378a] poppins'>EN</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-black font-semibold text-sm poppins-extralight'>Darius Uwizeye</p>
                                    <p className='text-black poppins hover:cursor-pointer'>Owner of welding workshops</p>
                                </div>
                                <MoreVertIcon className='text-2xl hover:cursor-pointer' />
                            </div>
                            <div className='w-full flex justify-center'>
                                <figure className='text-center'>
                                    <img src={darius} alt="" className='rounded-sm brightness-75 h-64' />
                                    <figcaption className="mt-2 text-sm text-gray-600">
                                        <p>
                                            Reference:<a href="https://trust-fund-for-africa.europa.eu/">https://trust-fund-for-africa.europa.eu/</a>
                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className='flex flex-row'>
                                <p className='text-base poppins flex items-center'>
                                    “I studied welding through TVET, got a teaching job, and later opened my own workshops.”
                                    TVET gave me income, stability, and a better life."
                                </p>
                            </div>
                            <div className='w-full bg-[#f3edf7] flex flex-row justify-around'>
                                <div className='fle flex-col' >
                                    <p className='text-xs font-semibold'></p>
                                </div>
                            </div>

                        </div>

                        <div className='w-[400px] bg-[#fef7ff] p-3 flex flex-col border-[1px] border-[#cac4d0] rounded-lg shadow-2xl space-y-4 shrink-0'>
                            <div className='flex flex-row justify-around space-x-5'>
                                <div className=' h-10 bg-[#eaddff] rounded-full p-4 flex items-center'>
                                    <p className='text-2xl text-[#4f378a] poppins'>NJ</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-black font-semibold text-sm poppins-extralight'>Janvier Ndereyimana</p>
                                    <p className='text-black poppins hover:cursor-pointer'>Teacher&Beverage Operations</p>
                                </div>
                                <MoreVertIcon className='text-2xl hover:cursor-pointer' />
                            </div>
                            <div className='w-full flex justify-center'>
                                <figure className='text-center'>

                                    <img src={janvier} alt="" className='rounded-sm brightness-90 h-64' />
                                    <figcaption className="mt-2 text-sm text-gray-600">
                                        <p>
                                            Reference:<a href="https://trust-fund-for-africa.europa.eu/">https://trust-fund-for-africa.europa.eu/</a>

                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className='poppins text-[15px] flex items-center'>
                                “I was lucky to go abroad for a year-long internship in Dubai.
                                Now, I can guide a student from not knowing how to mix flour to baking and decorating cakes that impress customers.”
                            </div>

                        </div>
                        <div className='w-[400px] bg-[#fef7ff] p-3 flex flex-col border-[1px] border-[#cac4d0] rounded-lg shadow-2xl space-y-4 shrink-0'>
                            <div className='flex flex-row justify-around space-x-5'>
                                <div className=' h-10 bg-[#eaddff] rounded-full p-4 flex items-center'>
                                    <p className='text-2xl text-[#4f378a] poppins'>JM</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-black font-semibold text-sm poppins-extralight'>Joyeouse Muhoza</p>
                                    <p className='text-black poppins hover:cursor-pointer'>Hair Dressing</p>
                                </div>
                                <MoreVertIcon className='text-2xl hover:cursor-pointer' />
                            </div>
                            <div className='w-full flex justify-center'>
                                <figure className='text-center'>
                                    <img src={muhoza} alt="" className='rounded-sm brightness-75 h-64' />
                                    <figcaption className="mt-2 text-sm text-gray-600">
                                        <p>
                                            Reference:<a href="https://trust-fund-for-africa.europa.eu/">https://trust-fund-for-africa.europa.eu/</a>

                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className='poppins text-base flex items-center'>
                                “Muhoza Joyeuse dropped out of school in Senior 5 due to financial hardship.
                                Thanks to the Dukorane Umurava TVET initiative, I gained practical training and/ now I'm employed.”
                            </div>

                        </div>
                        <div className='w-[400px] bg-[#fef7ff] p-3 flex flex-col border-[1px] border-[#cac4d0] rounded-lg shadow-2xl space-y-4 shrink-0'>
                            <div className='flex flex-row justify-around space-x-5'>
                                <div className=' h-10 bg-[#eaddff] rounded-full p-4 flex items-center'>
                                    <p className='text-2xl text-[#4f378a] poppins'>ND</p>
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <p className='text-black font-semibold text-sm poppins-extralight'>Ngarukiye Dieu Merci</p>
                                    <p className='text-black poppins hover:cursor-pointer'>Owns a Hair Dressing saloon</p>
                                </div>
                                <MoreVertIcon className='text-2xl hover:cursor-pointer' />
                            </div>
                            <div className='w-full flex justify-center'>
                                <figure className='text-center'>

                                    <img src={merci} alt="" className='rounded-sm brightness-75 h-64' />
                                    <figcaption className="mt-2 text-sm text-gray-600">
                                        <p>
                                            Reference:<a href="https://trust-fund-for-africa.europa.eu/">https://trust-fund-for-africa.europa.eu/</a>

                                        </p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className='poppins text-base flex items-center'>
                                “After joining Dukorane Umurava’s TVET programme, Congolese refugee Ngarukiye
                                Dieu Merci gained hairdressing skills, opened a small salon with colleagues, and now supports his family by working in salons.”
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <GetStarted/>
        </>
    )
}
export default Home
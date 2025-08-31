import { useEffect, useState } from 'react';
import firstImg from '../assets/landingPage/firstImg.png'
import secondImg from '../assets/landingPage/secondImg.jpg'
import thirdImg from '../assets/landingPage/thirdImg.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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
                    <p className='text-white flex items-center p-4'>Learn more</p>
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
            <div className='mx-auto'>
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
                    <div className='w-full flex flex-row space-x-3'>
                        <div className='w-1/2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Nemo error blanditiis doloremque repellat ipsa! Enim, necessitatibus. 
                            Beatae reprehenderit quod debitis! Illo nisi nemo similique expedita modi magnam in aspernatur perferendis!
                        </div>
                        <div className='w-1/2'>
                            <img src={firstImg} alt="" className='object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home
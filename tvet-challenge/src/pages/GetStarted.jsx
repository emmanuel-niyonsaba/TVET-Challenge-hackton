// import index from '../assets/index.png'
// const GetStarted = () => {
//     return (
//         <>
//             <div className="mx-auto w-full">
//                 <div className="min-h-screen flex items-center justify-center poppins">
//                     <div className="w-full max-w-xl bg-[#dbfdfc] p-4 rounded-xl shadow-xl">
//                         <div className="flex justify-center mb-6">
//                             <img src={index} alt="" className='w-20' />
//                         </div>
//                         <h2 className="text-center text-2xl font-bold text-black mb-6">
//                             Sign in to your account
//                         </h2>
//                         <form className="space-y-5 flex flex-col items-center">
//                             <div className='flex space-x-3'>
//                                 <div className='space-y-3'>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             FullName
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="Enter your fullname"
//                                             name='username'
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Email address
//                                         </label>
//                                         <input
//                                             type="email"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="you@example.com"
//                                             name='email'
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="password"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="*******"
//                                             name='password'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='space-y-2'>

//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1"> Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                             placeholder="••••••••"
//                                             name='confirmPassword'
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">Location</label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                             placeholder="••••••••"
//                                             name='location'
//                                         />
//                                     </div>
//                                     <div className='flex space-x-2 '>
//                                         <label className="block text-sm text-[#615fff] mb-1">Currently Studying</label>
//                                         <p className='text-[#615fff]'>Yes</p><input
//                                             type="radio"
//                                             className=" bg-[#0f172a] border border-gray-600  text-[#615fff] "
//                                             name='yes'
//                                         />
//                                         <p className='text-[#615fff] poppins'>No</p><input
//                                             type="radio"
//                                             className=" bg-[#0f172a] border border-gray-600  text-[#615fff] "
//                                             name='no'
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium transition"
//                             >
//                                 Sign in
//                             </button>
//                             <div className='text-[#615fff]'>
//                                 Already have an account <a href="#" className='underline'>Login</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div> */}

//                 {/* <div className="min-h-screen flex items-center justify-center poppins">
//                     <div className="w-full max-w-xl bg-[#dbfdfc] p-4 rounded-xl shadow-xl">
//                         <div className="flex justify-center mb-6">
//                             <img src={index} alt="" className='w-20' />
//                         </div>
//                         <h2 className="text-center text-2xl font-bold text-black mb-6">
//                             Sign in to your account
//                         </h2>
//                         <form className="space-y-5 flex flex-col items-center">
//                             <div className='flex space-x-3'>
//                                 <div className='space-y-3'>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Company Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="Enter your company name"
//                                             name='name'
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             TIN number
//                                         </label>
//                                         <input
//                                             type="number"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="enter your tin number"
//                                             name='tin'
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Select your Sector
//                                         </label>
//                                         <select name="" id="" className='w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white'>
//                                             <option value="">...</option>
//                                             <option value="agriculture">Agriculture</option>
//                                             <option value="ict">ICT</option>
//                                             <option value="transport">Transport</option>
//                                             <option value="energy">Energy</option>
//                                             <option value="construction">Construction</option>
//                                             <option value="hospitality">Hospitality</option>
//                                             <option value="art">Art&Craft</option>
//                                             <option value="technical">Technicalservice</option>
//                                             <option value="beauty">Beauty and Aesthetics</option>
//                                             <option value="manufacturing">Manufacturing</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Email address
//                                         </label>
//                                         <input
//                                             type="email"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="you@example.com"
//                                             name='email'
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="password"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                             placeholder="*******"
//                                             name='password'
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className='space-y-3'>

//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1"> Confirm Password</label>
//                                         <input
//                                             type="password"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                             placeholder="••••••••"
//                                             name='confirmPassword'
//                                         />
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm text-[#615fff] mb-1">Location</label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                             placeholder="••••••••"
//                                             name='location'
//                                         />
//                                     </div>
//                                     <div className=''>
//                                         <label className="block text-sm text-[#615fff] mb-1">Choose Company logo</label>
//                                         <input
//                                             type="file"
//                                             className="w-full  py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                             placeholder=""
//                                             name='img'
//                                         />
//                                     </div>
//                                     <div className=''>
//                                         <label className="block text-sm text-[#615fff] mb-1">Company description</label>
//                                         <textarea name="" id="" className="w-full  py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white " placeholder='write company description in short'></textarea>
//                                     </div>
//                                     <div className='flex space-x-3'>
//                                         <label className="block text-sm text-[#615fff] mb-1">Open to give internships</label>
//                                         <div className='flex'>
//                                             Yes<input
//                                                 type='checkbox'
//                                                 className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                                 placeholder=""
//                                                 name='yes'
//                                             />
//                                         </div>
//                                         <div className='flex'>
//                                             No<input
//                                                 type='checkbox'
//                                                 className="w-full px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white "
//                                                 placeholder=""
//                                                 name='no'
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium transition"
//                             >
//                                 Sign in
//                             </button>
//                             <div className='text-[#615fff]'>
//                                 Already have an account <a href="#" className='underline'>Login</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div> */}

//                 {/* <div className="min-h-screen flex items-center justify-center poppins">
//                     <div className="w-full max-w-md bg-[#dbfdfc] p-4 rounded-xl shadow-xl">
//                         <div className="flex justify-center mb-6">
//                             <img src={index} alt="" className='w-20' />
//                         </div>
//                         <h2 className="text-center text-2xl font-bold text-black mb-6">
//                             LogIn
//                         </h2>
//                         <form className="space-y-5 flex flex-col items-center ">
//                             <div>
//                                 <label className="block text-sm text-[#615fff] mb-1">
//                                     TIN number
//                                 </label>
//                                 <input
//                                     type="number"
//                                     className=" px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                     placeholder="enter your tin number"
//                                     name='tin'
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-[#615fff] mb-1">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     className=" px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                     placeholder="*******"
//                                     name='password'
//                                 />
//                             </div>
//                             <div className='mx-0'>
//                                 <p className='text-[#615fff] poppins'><a href="#">Forgot password</a></p>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="px-8 py-2 bg-[#14ae5c] hover:bg-[#088140] rounded-lg text-white font-medium transition"
//                             >
//                                 LogIn
//                             </button>
//                             <div className='text-[#615fff]'>
//                                 Don't  have an account <a href="#" className='underline'>SignIn</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div> */}
// {/* 
//                 <div className="min-h-screen flex items-center justify-center poppins">
//                     <div className="w-full max-w-md bg-[#dbfdfc] p-4 rounded-xl shadow-xl">
//                         <div className="flex justify-center mb-6">
//                             <img src={index} alt="" className='w-20' />
//                         </div>
//                         <h2 className="text-center text-2xl font-bold text-black mb-6">
//                             LogIn
//                         </h2>
//                         <form className="space-y-5 flex flex-col items-center ">
//                             <div>
//                                 <label className="block text-sm text-[#615fff] mb-1">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     className=" px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                     placeholder="enter your email"
//                                     name='email'
//                                 />
//                             </div>
//                             <div>
//                                 <label className="block text-sm text-[#615fff] mb-1">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     className=" px-8 py-2 bg-[#0f172a] border border-gray-600 rounded-lg text-white"
//                                     placeholder="*******"
//                                     name='password'
//                                 />
//                             </div>
//                             <div className='mx-0'>
//                                 <p className='text-[#615fff] poppins'><a href="#">Forgot password</a></p>
//                             </div>
//                             <button
//                                 type="button"
//                                 className="px-8 py-2 bg-[#14ae5c] hover:bg-[#088140] rounded-lg text-white font-medium transition"
//                             >
//                                 LogIn
//                             </button>
//                             <div className='text-[#615fff]'>
//                                 Don't  have an account <a href="#" className='underline'>SignIn</a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default GetStarted;


import React from 'react'

const GetStarted = () => {
  return (
    <div>GetStarted</div>
  )
}

export default GetStarted
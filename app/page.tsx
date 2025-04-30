'use client'
import Navbar from '@/components/navbar'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Heropage = () => {

  const user =  useUser()
  const role =  user.user?.publicMetadata?.role as string;
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#a2b9dc6f] c1cfe4 to-[#2c56b7] text-white">
      <Navbar />


<Link className=' capitalize flex w-fit hover:scale-110 transition-all text-white mx-auto text-center mt-32 ' href={role ? `/${role}` : '/'}>
        <h1 className=" font-bold text-3xl  textbase text-center "> go to {role} dashboard  </h1>
        </Link>

      <div className="flex flex-col md:flex-row items-center justify-center -mt-60 h-full px-8 md:px-20">
        <div className="flex-1 text-center md:text-left">
        {/* Left Section */}
        
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Simplify Your <span className="text-blue-800">Payroll</span> Process
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Our all-in-one payroll management system helps you save time, reduce errors, and ensure compliance.
          </p>
          <div>
             
            <Link href="/sign-in">
            <button className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded mr-4 transition duration-300">
            Get Started
            </button>
          </Link>

            <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-6 rounded transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section (Optional Illustration or Image) */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?t=st=1746036696~exp=1746040296~hmac=721059f4f05285996ec1c97987b12ea0466d7c5deebbb3d76dc2e5f76ba3e02b&w=1800"
            alt="Payroll Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  )
}

export default Heropage

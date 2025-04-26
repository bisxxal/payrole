import Link from 'next/link'
import React from 'react'

const Emppage = () => {
  return (
    <div className=' '>
        <h1 className=' text-4xl font-bold text-center my-2'>Emp Panel</h1>

        <div className='mt-10 flex flex-warp justify-center items-center w-full'>
             
            <Link href={'/emp/leaves'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                 Leaves
            </Link>
            <Link href={'/emp/attendance'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                 Attendance
            </Link>
            <Link href={'/emp/payslip'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
            <h1 className="text-xl font-bold text-center ">Payslip</h1>
            </Link>
        </div>
    </div>
  )
}

export default Emppage
import Link from 'next/link'
import React from 'react'

const Emppage = () => {
  return (
    <div className=' '>
        <h1 className=' text-4xl font-bold text-center my-2'>Emp Panel</h1>

        <div>
             
            <Link href={'/emp/leaves'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                 Leaves
            </Link>
            <Link href={'/emp/attendance'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                 Attendance
            </Link>
        </div>
    </div>
  )
}

export default Emppage
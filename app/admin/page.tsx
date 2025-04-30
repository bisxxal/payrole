import Link from 'next/link'
import React from 'react'

const AdminPanel = () => {
  return (
    <div className=' '>
        <h1 className=' text-4xl font-bold text-center my-2'>Admin Panel</h1>

        <div className='mt-10 flex flex-wrap justify-center items-center w-full'>
            <Link href={'/admin/emp'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                 Employee Details
            </Link>
            
            <Link href={'/admin/payrole'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                Employee payrole
            </Link>
            <Link href={'/admin/leaves'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                Employee Leaves
            </Link>
            <Link href={'/admin/attendance'} className=' h-[200px] hover:scale-110 transition-all !rounded-2xl w-[300px] buttonbg p-6 py-2  flex items-center justify-center text-lg mx-auto mt-10 text-center'>
                Employee Attendance
            </Link>
        </div>
    </div>
  )
}

export default AdminPanel
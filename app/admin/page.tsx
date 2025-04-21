import Link from 'next/link'
import React from 'react'

const AdminPanel = () => {
  return (
    <div className=' '>
        <h1 className=' text-4xl font-bold text-center my-2'>Admin Panel</h1>

        <div>
            <Link href={'/admin/emp'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                 Employee Details
            </Link>
            
            <Link href={'/admin/payrole'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                Employee payrole
            </Link>
            <Link href={'/admin/leaves'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                Employee Leaves
            </Link>
            <Link href={'/admin/attendance'} className=' buttonbg p-6 py-2 w-[200px] mx-auto mt-10 block text-center'>
                Employee Attendance
            </Link>
        </div>
    </div>
  )
}

export default AdminPanel
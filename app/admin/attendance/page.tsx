import { allAttendance } from '@/actions/admin/adminform'
import React from 'react'

const AttendanceAdmin =async () => {
    const data  =  await allAttendance()
  return (
    <div  className=' w-full'>

        <h1 className=' text-4xl font-bold text-center my-20 '>Attendance Page</h1>
        {
           data && data.data.map((item:any)=>{
                return(
                    <div key={item.userId} className='  bg-zinc-800 rounded-3xl p-5 flex flex-col mx-auto mb-5 w-5/6 '>
                        <h1>emp id {item.userId}</h1>
                        <p>In time {item.checkIn}</p>
                        <p>Out time {item?.checkOut}</p>
                        <p>Total hours {item?.totalTime}</p>
                        <p>Date  {item?.date}</p>
                        <p>Status {item.status}</p>

                    </div>
                )
            })
        }
    </div>
  )
}

export default AttendanceAdmin
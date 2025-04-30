import { allAttendance } from '@/actions/admin/adminform'
import React from 'react'

const AttendanceAdmin =async () => {
    const data  =  await allAttendance()
  return (
    <div  className=' w-full'>

        <h1 className=' text-4xl font-bold text-center my-20 '>Attendance Page</h1>

        <div>

        <div className='grid grid-cols-6  bg-zinc-200 rounded-xl p-5  mx-auto mb-2 w-[90%] capitalize'>
              <p>emp id</p>
                <p>In time</p>
                <p>Out time</p>
                <p>Total hours</p>
                <p>Date</p>
                <p>Status</p>
            </div>

            <div className='  bg-zinc-200 mb-1 border border-[#00000038] rounded-xl overflow-hidden w-[90%] mx-auto'>  
        {
            data && data.data.map((item:any)=>{
                return(
                    <div key={item.userId} className='  p-4 grid grid-cols-6 mx-auto border-[#00000038] mb-1 border-b w-full'>
                        <h1>emp id {item.userId}</h1>
                        <p>In time {item.checkIn}</p>
                        <p>Out time {item?.checkOut}</p>
                        <p>Total hours {item?.totalTime}</p>
                        <p>Date  {item?.date}</p>
                        <p>Status {item.status}</p>

                    </div>
                )
            })
        } </div>
        </div>
    </div>
  )
}

export default AttendanceAdmin
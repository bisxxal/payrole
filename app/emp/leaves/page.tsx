import { AllLeaves, LogginUser } from '@/actions/admin/adminform'
import LeavesEmpForm from '@/components/leavesEmpForm'
import { currentUser } from '@clerk/nextjs/server'
import moment from 'moment'
import React from 'react'

const LeavesEMPPage = async() => {
     
    const user = await currentUser()
    const id = user?.id as string
    const leaves = await AllLeaves(id)
  return (
    <div>
        <LeavesEmpForm  />

      <h1 className=' text-center text-3xl font-bold my-20'> List Of your Leaves</h1>
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
          leaves.leaves.map((leave:any) => {
            return (
              <div key={leave.id} className='  p-4 grid grid-cols-6 mx-auto border-[#00000038] mb-1 border-b w-full'>
                <h1 className=' text-2xl font-bold'>{leave.leave_type}</h1>
                <p className=' text-gray-800'>Status : {leave.leave_status}</p>
                <p className=' text-gray-800'>Total Days : {leave.total_days}</p>
                <p className=' text-gray-800'>Reason : {leave.reason}</p>
                <p className=' text-gray-800'> {moment( leave.leave_start).format('MMMM Do YYYY, h:mm:ss a') }</p>
                <p className=' text-gray-800'> {moment( leave.leave_end).format('MMMM Do YYYY, h:mm:ss a')}</p>

              </div>
            )
          }
          )
        }  </div>
    </div>
  )
}

export default LeavesEMPPage
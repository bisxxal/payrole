import { AllLeaves, LogginUser } from '@/actions/admin/adminform'
import LeavesEmpForm from '@/components/leavesEmpForm'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const LeavesEMPPage = async() => {
     
    const user = await currentUser()
    const id = user?.id as string
    const leaves = await AllLeaves(id)
  return (
    <div>
        <LeavesEmpForm  />


      <h1 className=' text-center text-3xl font-bold mt-20'> List Of your Leaves</h1>
        {
          leaves.leaves.map((leave:any) => {
            return (
              <div key={leave.id} className=' bg-zinc-800 rounded-3xl p-5 flex flex-col mx-auto mb-5 w-5/6 mt-5'>
                <h1 className=' text-2xl font-bold'>{leave.leave_type}</h1>
                <p className=' text-gray-500'>Status : {leave.leave_status}</p>
                <p className=' text-gray-500'>Total Days : {leave.total_days}</p>
                <p className=' text-gray-500'>Reason : {leave.reason}</p>
                <p className=' text-gray-500'>From : {leave.leave_start.toString()}</p>
                <p className=' text-gray-500'>To : {leave.leave_end.toString()}</p>
              </div>
            )
          }
          )
        }
    </div>
  )
}

export default LeavesEMPPage
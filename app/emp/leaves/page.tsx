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

        {
          leaves.leaves.map((leave:any) => {
            return (
              <div key={leave.id} className=' border-2 p-4 m-4'>
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
'use client'
import { ApproveFOrm } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const ApproveForm = ({leaves}:any) => {


    const router = useRouter()

    console.log(leaves)
    const onSumbit = async(formData:FormData)=>{
        const id = formData.get('id') as string
        const res  = await ApproveFOrm(id)
        toast.success('Leave Approved Successfully')
        router.refresh()
    }
  return (
    <div>
         {
          leaves.leaves.map((leave:any) => {
            return (
              <form  action={onSumbit} key={leave.id} className=' border-2 p-4 m-4'>
                <input className=' bg-transparent' name='id' type="text" value={leave.id} readOnly />
                <h1 className=' text-2xl font-bold'>{leave.leave_type}</h1>
                <p className=' text-gray-500'>Status : {leave.leave_status}</p>
                <p className=' text-gray-500'>Total Days : {leave.total_days}</p>
                <p className=' text-gray-500'>Reason : {leave.reason}</p>
                <p className=' text-gray-500'>From : {leave.leave_start.toString()}</p>
                <p className=' text-gray-500'>To : {leave.leave_end.toString()}</p>

                <button type="submit" className=' buttonbg p-6 py-2'>Approve</button>
              </form>
            )
          }
          )
        }
    </div>
  )
}

export default ApproveForm
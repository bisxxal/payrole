'use client'
import { ApproveFOrm } from '@/actions/admin/adminform'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'

const ApproveForm = ({leaves}:any) => {


    const router = useRouter()

    const onSumbit = async(formData:FormData)=>{
        const id = formData.get('id') as string
        const res  = await ApproveFOrm(id)
        toast.success('Leave Approved Successfully')
        router.refresh()
    }
  return (
    <div>
      
         <div className='grid grid-cols-8 bg-zinc-200 rounded-xl p-5  mx-auto mb-2 w-[90%] capitalize'>
               
               <p>leave Id</p>
               <p>leave Type</p>
                <p>status</p>
                <p>total days</p>
                <p>reason</p>
                <p>from</p>
                <p>to</p>
                <p>action</p>
            </div>
         {
          leaves.leaves.map((leave:any) => {
            return (

              <>
              <form  action={onSumbit} key={leave.id} className=' bg-zinc-200 mb-1 border border-[#00000038] rounded-xl overflow-hidden w-[90%] mx-auto'>
          <div className='  p-2 grid grid-cols-8 items-center  gap-2 mb-1 mx-auto  w-full'>
                <input className=' bg-transparent' name='id' type="text" value={leave.id} readOnly />
                <h1 className=' text-xl font-semibold'>{leave.leave_type}</h1>
                <p className=' text-gray-800'> {leave.leave_status}</p>
                <p className=' text-gray-800'> {leave.total_days}</p>
                <p className=' text-gray-800'> {leave.reason}</p>
                <p className=' text-gray-800'> {moment( leave.leave_start).format('MMMM Do YYYY, h:mm:ss a') }</p>
                <p className=' text-gray-800'> {moment( leave.leave_end).format('MMMM Do YYYY, h:mm:ss a')}</p>

                {
                  leave.leave_status === 'pending' ? (
                    <button type="submit" className=' buttonbg p-6 py-2'>Approve</button>
                  ) : (
                    <button disabled className=' disabled:cursor-not-allowed bg-green-500 p-6 py-2 rounded-full'> Approved</button>
                  )
                }

          </div>
              </form>
              </>
            )
          }
          )
        }
    </div>
  )
}

export default ApproveForm
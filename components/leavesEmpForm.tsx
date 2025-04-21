'use client'
import { EmpCreateLeave } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const LeavesEmpForm = () => {
    const router = useRouter()
 const [loading , setLoading] = useState(false)
    const onSumbit = async(formData:FormData)=>{
        setLoading(true)

        const leaveType = formData.get('leaveType') as string

        const totalDays = formData.get('totalDays') as string

        const reason = formData.get('reason')  as string
        const from = formData.get('from') as  string
        const to = formData.get('to') as string
        const res = await EmpCreateLeave(leaveType , totalDays  , reason , from , to )
        if(res){ 
            toast.success('Leave Created Successfully')

        }
        setLoading(false)
        router.refresh()

    }
 
  return (
    <div className=' border-2 '>
    <form action={onSumbit} className=' w-[80%] mx-auto mt-20 p-4'>
        <div className=' flex flex-col gap-4'>
         
           

             <select name="leaveType"className=' bg-transparent border-2 border-gray-300 p-2' >
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
                <option value="Compensatory Off">Compensatory Off</option>
                <option value="Unpaid Leave">Unpaid Leave</option>
             </select>

            <input name='totalDays' type="text" placeholder='Total Days' className=' bg-transparent border-2 border-gray-300 p-2' />
             
            <input name='reason' type="text" placeholder='Reason' className=' bg-transparent border-2 border-gray-300 p-2' />

            <input className=' bg-transparent border-2 border-gray-300 p-2' name="from" type="datetime-local" placeholder='From DAte' />
            <input className=' bg-transparent border-2 border-gray-300 p-2' name="to" type="datetime-local" placeholder='To date' />

        </div>
        <button type="submit" className=' buttonbg p-6 py-2'>{ loading ?' creating ...' :'Create Payrole'}</button>
    </form>
</div>
  )
}

export default LeavesEmpForm
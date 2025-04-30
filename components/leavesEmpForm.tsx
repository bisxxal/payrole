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
    <div className=''>
    <form action={onSumbit} className=' bg-zinc-200 rounded-3xl p-5 flex flex-col mx-auto w-1/2 max-md:w-5/6 mt-20'>
        <div className=' flex flex-col gap-4'>
        
             <select name="leaveType"className=' bbg-transparent border-2 rounded-3xl border-[#00000038] p-2' >
                <option value="Casual Leave">Casual Leave</option>
                <option value="Sick Leave">Sick Leave</option>
                <option value="Earned Leave">Earned Leave</option>
                <option value="Maternity Leave">Maternity Leave</option>
                <option value="Paternity Leave">Paternity Leave</option>
                <option value="Compensatory Off">Compensatory Off</option>
                <option value="Unpaid Leave">Unpaid Leave</option>
             </select>

            <input name='totalDays' type="text" placeholder='Total Days' className=' bbg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
             
            <input name='reason' type="text" placeholder='Reason' className=' bbg-transparent border-2 rounded-3xl border-[#00000038] p-2' />

            <input className=' bbg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="from" type="datetime-local" placeholder='From DAte' />
            <input className=' bbg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="to" type="datetime-local" placeholder='To date' />

        </div>
        <button type="submit" className=' buttonbg p-6 py-2'>{ loading ?' creating ...' :'Create Payrole'}</button>
    </form>
</div>
  )
}

export default LeavesEmpForm
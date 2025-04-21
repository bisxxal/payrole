'use client'
import { createAttendance } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const EmpAttendeanceForm = () => {
   const [loading , setLoading] = useState(false)
    const router = useRouter()

    const onSumbit = async(formData:FormData)=>{

        setLoading(true)
        const inTime = formData.get('in') as string;
        const OutTime = formData.get('out') as string;
        const total = formData.get('total') as string;
         await createAttendance( inTime , OutTime , total)
        toast.success("Attendance added successfully")
        setLoading(false)
        router.refresh()
    }
  return (
    <div className=' w-full '>
        
        <form action={onSumbit} className=' flex flex-col mx-auto w-5/6 mt-20'>

        <label htmlFor="">In Time</label>
        <input className=' bg-transparent border-2 border-gray-300 p-2' name="in" type="datetime-local" placeholder='IN-time' />
        <input className=' bg-transparent border-2 border-gray-300 p-2' name="out" type="datetime-local" placeholder='Out-time' />
        <input className=' bg-transparent border-2 border-gray-300 p-2' name="total" type="number" placeholder='Total Hours' />

        <button type="submit" className=' buttonbg p-6 py-2'>{loading ? 'Sumbiting ...' :'Sumbit'}</button>
        </form>
    </div>
  )
}

export default EmpAttendeanceForm
'use client'
import { createAttendance } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {
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
        
        <h1 className=' text-xl font-bold text-center mt-10'>Attendance </h1>
        <form action={onSumbit} className=' bg-zinc-200 rounded-3xl p-5 flex flex-col mx-auto w-1/2 max-md:w-5/6 mt-20'>

        <label>In Time</label>
        <input className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="in" type="datetime-local" placeholder='IN-time' />
        <label>Out Time</label>
        <input className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="out" type="datetime-local" placeholder='Out-time' />
        <label htmlFor="">Total hours</label>
        <input className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="total" type="number" placeholder='Total Hours' />

        <button type="submit" className=' buttonbg p-6 py-2'>{loading ? 'Sumbiting ...' :'Sumbit'}</button>
        </form>
    </div>
  )
}

export default page
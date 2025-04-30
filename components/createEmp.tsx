'use client'
import { adminCreateEmp } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const CreateEmp = () => {

    const [loading , setLoading] = useState(false)
    const router = useRouter()
    const [error , setError] = useState('');
    const onSumbit = async(formData:FormData)=>{
        setError('')
        setLoading(true)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phoneNo = formData.get('phone') as string
        const salary = formData.get('salary') as string
        const role = formData.get('role') as string
        const des = formData.get('des') as string
        const joining_date = formData.get('joining_date') as string

        const username = formData.get('username') as string
        const password = formData.get('password') as string
        try {
            // const res = await AddAdmin( username , firstName ,lastName ,email, password ,collage );
            const res = await adminCreateEmp(username , password , name , email , phoneNo , salary , role ,des , joining_date)
            if (res?.message) {
              toast.error(res?.message?.errors[0]?.message)
              setError(res?.message?.errors[0]?.message)
            }
            if(res?.success)
            toast.success('Admin added successfully');
          }
          catch (error) {
          }
        setLoading(false)
        router.refresh()
    }
  return (
    <div className=' w-full '>
        
        <h1 className=' text-center font-bold text-4xl'>Create Employee</h1>
        <form  action={onSumbit} className=' bg-zinc-200 rounded-3xl p-5 flex flex-col mx-auto w-1/2 max-md:w-5/6 mt-20'>
            <div className=' flex flex-col gap-4'>
                <input name='name' type="text" placeholder='name' className='bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input name='username' type="text" placeholder='userName' className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input name='password' type="password" placeholder='password' className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input name='email' type="email" placeholder='email' className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input name='phone' type="number" placeholder='department' className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input name='salary' type="number" placeholder='salary' className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' />
                <input  type="text" name='des'className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' placeholder='deg'/>
                <input className=' bg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="joining_date" type="datetime-local" placeholder='date' />

                <select className='bg-transparent border-2 rounded-3xl border-[#00000038] p-2' name="role" id="">
                    <option value="admin">Admin</option>
                    <option value="emp">Employee</option>
                </select>

                {error &&  <span className="text-red-500 text-lg "> {error} </span>}

                <button type="submit" className=' buttonbg p-6 py-2'>{ loading ? 'Creating...' :'Create Employee'}</button>
            </div>
        </form>
    </div>
  )
}

export default CreateEmp
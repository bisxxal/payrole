'use client'
import { adminCreatePayrole } from '@/actions/admin/adminform'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const PayroleAdmin = ({emp}:any) => {
    const router = useRouter()
 const [loading , setLoading] = useState(false)
    const onSumbit = async(formData:FormData)=>{
        setLoading(true)
        const paymentDate = formData.get('paymentDate') as string
        const salary = formData.get('salary') as string
        const deduction = formData.get('deduction') as string
        const net = formData.get('net') as string
        const bonus = formData.get('bonus') as string
        const status = formData.get('status') as string
        const userId = formData.get('userId') as string

        console.log(paymentDate, salary, deduction , net , bonus , status ,"userId", userId);

        // const res = await adminCreateEmp(name , email , phoneNo , salary , role ,des , joining_date)
 
        const res = await adminCreatePayrole(paymentDate , salary , deduction , net , bonus , status , userId)
 
        toast.success("payrole added successfully")
        setLoading(false)
        router.refresh()
    }
  return (
    <div className=' w-full '>
          <h1 className=' text-center font-bold text-4xl'>Create Payrole</h1>
        <form action={onSumbit} className=' bg-zinc-800 rounded-3xl p-5 flex flex-col mx-auto w-1/2 max-md:w-5/6 mt-20'>
            <div className=' flex flex-col gap-4'>
                <input name='paymentDate'  type="datetime-local"  className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2'/>
                <input name='salary' type="number" placeholder='salary' className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2' />
                <input name='deduction' type="number" placeholder='deduction' className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2' />
                <input name='net' type="number" placeholder='Net salary' className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2' />
                <input name='bonus' type="number" placeholder='Bonus' className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2' />

                <select name="status"  className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2'>
                    <option value="paid">Paid</option>
                    <option value="unpaid">Unpaid</option>
                    <option value="pending">Pending</option>
                </select>

                <select name="userId" className='bg-transparent border-2 rounded-3xl border-[#ffffff2b] p-2'>
                    {
                        emp.map((item:any) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>

            </div>
            <button type="submit" className=' buttonbg p-6 py-2'>{ loading ? 'Creating...' :'Create Payrole'}</button>
        </form>
    </div>
  )
}

export default PayroleAdmin
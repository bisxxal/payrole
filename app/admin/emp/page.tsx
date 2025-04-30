import { AllEmp } from '@/actions/admin/adminform'
import CreateEmp from '@/components/createEmp'
import moment from 'moment'
import React from 'react'
 
const page = async() => {
    const data2 = await AllEmp()
  return (
    <div className=' w-full min-h-screen'>
             <CreateEmp />
        <div className=' mx-auto mt-10 p-4'>
        <h1 className=' my-10 text-center font-bold text-4xl'>Employee Details </h1>

            <div className='grid grid-cols-6  bg-zinc-200 rounded-xl p-5  mx-auto mb-2 w-[90%] capitalize'>
                <p>name</p>
                <p>email</p>
                <p>phone no</p>
                <p>salary</p>
                <p>role</p>
                <p>joining date</p>
            </div>
           <div className='  bg-zinc-200 mb-1 border border-[#0000003d]  rounded-xl overflow-hidden w-[90%] mx-auto'>  
           {
                data2.map((item:any) => (
                    <div key={item.id} className='  p-4 grid grid-cols-6 mx-auto border-[#00000038]  border-b w-full'>
                        <h2 className=' text-xl font-bold'>{item.name}</h2>
                        <p> {item.email}</p>
                        <p>{item.phoneNumber}</p>
                        <p>₹{item.salary}</p>
                        <p> {item.role}</p>
                        <p>{ moment( item.joining_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                ))
            }
           </div>
        </div>
    </div>
  )
}

export default page
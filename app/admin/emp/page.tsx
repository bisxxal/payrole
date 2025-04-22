import { AllEmp } from '@/actions/admin/adminform'
import CreateEmp from '@/components/createEmp'
import moment from 'moment'
import React from 'react'
 
const page = async() => {
    const data2 = await AllEmp()
  return (
    <div className=' w-full min-h-screen'>
        
        <h1 className=' text-center font-bold text-4xl'>Employee Details </h1>
        <div className=' mx-auto mt-20 p-4'>
            {
                data2.map((item:any) => (
                    <div key={item.id} className='  bg-zinc-800 rounded-3xl p-5 flex flex-col mx-auto mb-5 w-5/6'>
                        <h2 className=' text-xl font-bold'>{item.name}</h2>
                        <p>email: {item.email}</p>
                        <p>PhoneNo: {item.phoneNumber}</p>
                        <p>Salary: ${item.salary}</p>
                        <p>role {item.role}</p>
                        <p>joining_date { moment( item.joining_date).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                ))
            }
        </div>


        <CreateEmp />
    </div>
  )
}

export default page
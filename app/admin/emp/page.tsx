import { AllEmp } from '@/actions/admin/adminform'
import CreateEmp from '@/components/createEmp'
import moment from 'moment'
import React from 'react'

const data = [
    {
        id: 1,
        name: 'John Doe',
        position: 'Software Engineer',
        department: 'IT',
        salary: 60000,
    },
    {
        id: 2,
        name: 'Jane Smith',
        position: 'Project Manager',
        department: 'Management',
        salary: 80000,
    },
    {
        id: 3,
        name: 'Alice Johnson',
        position: 'Designer',
        department: 'Design',
        salary: 55000,
    },
]
const page = async() => {
    const data2 = await AllEmp()
  return (
    <div className=' w-full min-h-screen'>
        
        <h1 className=' text-center font-bold text-4xl'>Employee Details </h1>
        <div className=' border-2 border-gray-300 w-[80%] mx-auto mt-20 p-4'>
            {
                data2.map((item:any) => (
                    <div key={item.id} className=' border-b-2 border-gray-300 p-4'>
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
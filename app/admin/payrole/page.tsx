import { AllEmp, AllPayrole } from '@/actions/admin/adminform'
import PayroleAdmin from '@/components/payroleAdmin'
import moment from 'moment'
import React from 'react'

const PayRole = async() => {
  const emp = await AllEmp()

  const payrole = await AllPayrole()
  return (
    <div className=' w-full  px-5  '>
      <div className=' w-full'>
        <PayroleAdmin  emp={emp}/>
      </div>

      <div className=' w-full '>

          <h1 className=' text-center text-4xl font-bold  my-10 '> List of payroles </h1>
          
          <div>
          <div className='grid grid-cols-10  bg-zinc-200 rounded-xl p-5  mx-auto mb-2 w-[90%] capitalize'>
                <p>User name</p>
                <p>user id</p>
                <p>Salary</p>
                <p>Deduction</p>
                <p>Net Salary</p>
                <p>Bonus</p>
                <p>Status</p>
                <p>Payment Date</p>
                <p>Created At</p>
                <p>Employee Email</p>
            </div>
          </div>

          <div className='  bg-zinc-200 mb-1 border border-[#00000038] rounded-xl overflow-hidden w-[90%] mx-auto'>  
{
          payrole &&  payrole.payrole.map((item:any) => (
              <div key={item.id} className='  p-5 grid grid-cols-10  gap-2 mb-1 border-b border-[#00000038] mx-auto  w-full'>
                <h1 className=' text-2xl font-bold'>{item.user.name}</h1>
                <p>User ID: {item.userId}</p>
                <p>Salary: {item.salary}</p>
                <p>Deduction: {item.deduction}</p>
                <p>Net Salary: {item.net_salary}</p>
                <p>Bonus: {item.bounce}</p>
                <p>Status: {item.payment_status}</p>
                <p>Payment Date: {moment( item.payment_date).format('MMMM Do YYYY, h:mm:ss a') }</p>
                <p>Created At: {moment( item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <p>Employee Email: {item.user.email}</p>
          </div>
                ))
          }
          </div>
          
        </div>
    </div>
  )
}

export default PayRole
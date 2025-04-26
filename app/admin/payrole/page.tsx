import { AllEmp, AllPayrole } from '@/actions/admin/adminform'
import PayroleAdmin from '@/components/payroleAdmin'
import moment from 'moment'
import React from 'react'

const PayRole = async() => {
  const emp = await AllEmp()

  const payrole = await AllPayrole()
  return (
    <div className=' w-full flex px-5 justify-between '>
      <div className=' w-1/2 max-md:w-full'>
        <PayroleAdmin  emp={emp}/>
      </div>

      <div className=' w-1/2 max-md:w-full'>

          <h1 className=' text-center text-4xl font-bold  my-10 '> List of payroles </h1>
          {
          payrole &&  payrole.payrole.map((item:any) => (
              <div key={item.id} className='  bg-zinc-800 rounded-3xl p-5 flex flex-col gap-2 mx-auto mb-5 w-5/6'>
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
  )
}

export default PayRole
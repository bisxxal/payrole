import { AllEmp, AllPayrole } from '@/actions/admin/adminform'
import PayroleAdmin from '@/components/payroleAdmin'
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
              <div key={item.id} className='  bg-zinc-800 rounded-3xl p-5 flex flex-col mx-auto mb-5 w-5/6'>
                <h1 className=' text-2xl font-bold'>{item.user.name}</h1>
                <p>Salary: {item.salary}</p>
                <p>Deduction: {item.deduction}</p>
                <p>Net Salary: {item.net_salary}</p>
                <p>Bonus: {item.bounce}</p>
                <p>Status: {item.payment_status}</p>
                <p>Payment Date: {item.payment_date.toString()}</p>
                <p>User ID: {item.userId}</p>
                <p>Created At: {item.createdAt.toString()}</p>
                <p>Updated At: {item.updatedAt.toString()}</p>

                <p>Employee Email: {item.user.email}</p>
          </div>
                ))
          }
        </div>
    </div>
  )
}

export default PayRole
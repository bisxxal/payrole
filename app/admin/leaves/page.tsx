import { AllLeaves } from '@/actions/admin/adminform'
import ApproveForm from '@/components/approveForm'
import LeavesAdmin from '@/components/leavesEmpForm'
import React from 'react'

const LeavesPage = async() => {
   const leaves = await AllLeaves()
  return (
    <div className=' w-full'>

        <h1 className=' text-4xl font-bold text-center my-10'>Leaves form</h1>

        <ApproveForm leaves={leaves} />

    </div>
  )
}

export default LeavesPage
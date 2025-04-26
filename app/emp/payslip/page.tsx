 
import { paySleveById } from '@/actions/admin/adminform';
import Dowload from '@/components/Download';
import moment from 'moment';

const PaySleve =async () => {
    const data = await paySleveById()
    console.log(data)
  return (
<div className="w-full">
    <h1 className="text-3xl font-bold text-center mt-10">Payslip</h1>
    <div>
        {
            data?.data?.map((item:any , index:number) => (

                <div className=' flex flex-col items-center justify-center ' key={index}>
                      

                <div key={index}   id={`recipt${index}`} className="bg-white text-black rounded-3xl p-5 flex flex-col mx-auto w-1/2 max-md:w-5/6 mt-20">
                    <div className="grid grid-cols-2 gap-6">
                        <label>Payslip ID</label><p>{item.id}</p>
                        <label>Employee ID</label><p>{item.userId}</p>
                        <label>Basic Salary</label><p>{item.salary}</p>
                        <label>Deductions</label><p>{item.deduction}</p>
                        <label>Bounce</label><p>{item.bounce}</p>
                        <label htmlFor="">Status</label> <p>{item.payment_status}</p>
                        <label>Payment Date</label><p>{  moment( item.payment_date).format('MMMM Do YYYY, h:mm:ss a') }</p>
                    </div>
                </div>
                <Dowload text="Payslip" index={index} />
                </div>
            ))
        }
    </div>

    {/* <button  className='buttonbg p-3' onClick={()=>DownloadReceipt('paysleve')}> Dowload</button> */}
  </div>
  )
}

export default PaySleve

 
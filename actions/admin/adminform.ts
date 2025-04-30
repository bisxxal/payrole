'use server'

import { prisma } from "@/lib/prisma"
import { handelError } from "@/utils/error"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { getServerSession } from "next-auth"


export const LogginUser = async () => {
    try {

        const user2 = await currentUser();

        if(!user2){
            return null
        }
        const user = await prisma.user.findUnique({
            where:{
                email:user2?.id as string
            },
           select:{
            id:true,
            name:true,
            role    :true,
            email   :true,
           }
        })
        return JSON.parse(JSON.stringify(user))

    } catch (error) {
        handelError(error , 'LogginUser')
    }
}
export const AllEmp = async () => {
    try {
        const emp = await prisma.user.findMany({
            where:{
                role:'emp'
            },
            orderBy:{
                createdAt:'desc'
            }
        })

        return JSON.parse(JSON.stringify(emp))
    } catch (error) {
        
    }
}

export const adminCreateEmp = async ( username:string , password :string , name:string , email:string , phoneNo:string , salary :string, role:string ,des:string , joning_date:string) => {
    try {


        const clerk = clerkClient();  
      const user = await (await clerk).users.createUser({
        username:  username,
        password: password,
        firstName: name,
        publicMetadata:{role:role},
      }); 
  
      const usrid = user.id;


        const emp = await prisma.user.create({
        data:{
            id:usrid,
            name,
            email,
            phoneNumber:phoneNo,
            salary:parseInt(salary),
            role,
            // des,
            joiningDate:new Date(joning_date),

        }
        })

        if(emp){
            return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,emp}))
        }
    } catch (error) {
        handelError(error , 'AccessGive')
        return JSON.parse(JSON.stringify({success: false, error: true, message:error}));  
    }
}

export const adminCreatePayrole = async (paymentDate:string , salary:string , deduction:string, net:string , bonus:string , status:string , userId:string) => {
    try {
        const payrole = await prisma.payrole.create({
            data:{
                salary:parseInt(salary),
                payment_date:new Date(paymentDate),
                deduction:parseInt(deduction),
                // net_salary:parseInt(net),
                bounce:parseInt(bonus),
                payment_status : status,
                userId:userId
            }
        })

    } catch (error) {
        handelError(error , 'create payrole')
        

    }
}

export const AllPayrole = async () => { 
    try {
            const payrole = await prisma.payrole.findMany({
                include:{
                    user:{
                        select:{
                            name:true,
                            email:true,
                            phoneNumber:true
                        }
                    }
                },
                orderBy:{
                    createdAt:'desc'
                } 
            })
            return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,payrole}))
    } catch (error) {
        handelError(error , 'create payrole')
    }
}

export const EmpCreateLeave = async (leaveType:string  , totalDays:string , reason:string , from:string , to:string) => {  
    try {
        
        const user = await currentUser()
        const leave = await prisma.leaves.create({
            data:{
                leave_type:leaveType,
                leave_status:'pending',
                total_days:parseInt(totalDays),
                status : "pending",
                reason,
                leave_start:new Date(from),
                leave_end:new Date(to),
                userId:user?.id as string
            }
        })
     

        return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,leave}))
    } catch (error) {
        handelError(error , 'create leave')
    }
}

export const AllLeaves = async (id?:string) => {
    try {

        
        if(id){
            const leaves = await prisma.leaves.findMany({
                where:{
                    userId:id
                },
                include:{
                    user:{
                        select:{
                            name:true,
                            email:true,
                            phoneNumber:true
                        }
                    }
                },
                orderBy:{
                    createdAt:'desc'
                } 
            })
            return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,leaves}))
        }
        else{
             const leaves = await prisma.leaves.findMany({
            include:{
                user:{
                    select:{
                        name:true,
                        email:true,
                        phoneNumber:true
                    }
                }
            },
            orderBy:{
                createdAt:'desc'
            } 
        })
        return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,leaves}))
        }
       
    } catch (error) {
        handelError(error , 'create leave')
    }
}

export const ApproveFOrm = async (id:string) => {
    try {
        const res = await prisma.leaves.update({
            where:{
                id:id
            },
            data:{
                leave_status:'Approved',
                status:'Approved'
            },
            
        })

        return JSON.parse(JSON.stringify({staus:true , message:'Employee Created' ,res}))
    } catch (error) {
        
    }
}

export const createAttendance  =  async (inTime:string , OutTime:string, total:string )=>{

    try {

        // const user = await LogginUser()

        const user = await currentUser()

        const res =await  prisma.attendance.create({
            data:{
                date: new Date(),
                status:'cheacked',
                userId:user?.id  as string,
                checkIn:new Date (inTime),
                checkOut:new Date (OutTime),
                totalTime:parseInt(total)
            }
        })
        // return JSON.parse(JSON.stringify({res}))
    } catch (error) {
        handelError(error , 'create attendance')
    }
}

export const allAttendance = async ()=>{
    try {
        const data  = await prisma.attendance.findMany({orderBy:{
            createdAt:'desc'
        } })

        return JSON.parse(JSON.stringify({data}))

    } catch (error) {
        
    }
}

export const paySleveById = async () => {
    const user = await currentUser()


    try {
        const data = await prisma.payrole.findMany({
            where:{
                userId:user?.id as string
            },
            orderBy:{
                createdAt:'desc'
            } 
        })
        return JSON.parse(JSON.stringify({data}))
    } catch (error) {
        handelError(error , 'pay sleve by id')
    }
}
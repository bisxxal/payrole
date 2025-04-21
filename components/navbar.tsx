 'use client';

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = ({role , name}:any) => {

  console.log(role  , name)
   
  return (
    <nav className=" w-full h-[60px] bg-zinc-900 text-white flex justify-between items-center px-4">  
     <Link href="/">
           <h1 className=" textbase font-bold text-3xl "> Payrole  </h1>
     </Link>

      <div className="flex items-center gap-9">
       
         <span>Welcome, {role === 'admin' ? 'Admin':' Employee'}  <span className=" font-semibold textbase">{name} </span></span>

<div>

          <UserButton/> 
</div>
      </div>
    </nav>
  )
}

export default Navbar

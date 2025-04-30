 'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = ({role , name}:{role?:string , name?:string}) => {
  const user =  useUser()
  const role2 =  user.user?.publicMetadata?.role as string;
  
  return (
    <nav className=" w-full h-[60px] bg-[#0000002c] backdrop-blur-md text-white flex justify-between items-center px-4">  
   
    { !role2 ? <Link href="/">
           <h1 className=" textbase font-bold text-3xl "> Payrole  </h1>
     </Link> : <Link href={`/${role2}`}>
           <h1 className=" textbase font-bold text-3xl "> Payrole  </h1>
     </Link>}

     { user.isSignedIn && <div className="flex items-center gap-9">
       
         <span>Welcome, {role2 === 'admin' ? 'Admin':' Employee'}  <span className=" font-semibold textbase">{name} </span></span>

<div>
          <UserButton/> 
</div>
      </div>}

      { !user.isSignedIn && <div className="flex items-center gap-9">
          <Link href="/sign-in">
            <button className=" buttonbg !px-10 text-white  py-2 rounded-md hover:bg-zinc-700 transition duration-200">
              Sign In
            </button>
          </Link>
        </div>}

    </nav>
  )
}

export default Navbar

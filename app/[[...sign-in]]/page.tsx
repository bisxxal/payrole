//@ts-nocheck
"use client";
import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from "@clerk/nextjs";    
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LuLoader } from "react-icons/lu";

const LoginPage = () => {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    const role = user?.publicMetadata?.role;
    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen  flex items-center justify-center  overflow-hidden">
 
      { !user && 
      <SignIn.Root>
     <div className=" w-full h-full flex items-center relative justify-around">
       

        <SignIn.Step name="start">
          <header className="text-center">
       
            <h1 className="mt-4 max-md:text-2xl text-5xl logo font-medium tracking-tight ">
              Sign in to your account
            </h1>
          </header>
          <Clerk.GlobalError className="block text-sm  text-red-400" />
          <div className="  text-white flex flex-col gap-5 mb-5  space-y-4">
            <Clerk.Field name="identifier" className="space-y-2">
              <Clerk.Label className="text-sm font-medium ">Username</Clerk.Label>
              <Clerk.Input type="text" required
                className="w-full  !text-white rounded-2xl bg-transparent px-3.5 inputbg py-2 h-12  outline-none ring-1 ring-inset ring-zinc-600 hover:ring-zinc-500 focus:ring-[1.5px] focus:ring-zinc-500 data-[invalid]:ring-red-400"/>
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
            <Clerk.Field name="password" className="space-y-2">
              <Clerk.Label className="text-sm  font-medium ">Password</Clerk.Label>
              <Clerk.Input type="password" required
                className="w-full rounded-2xl bg-transparent px-3.5 inputbg py-2 h-12 outline-none ring-1 ring-inset ring-zinc-600 hover:ring-zinc-500 focus:ring-[1.5px] focus:ring-zinc-500 data-[invalid]:ring-red-400"/>
              <Clerk.FieldError className="block text-sm text-red-400" />
            </Clerk.Field>
          </div>
          <SignIn.Action
            submit className="w-full !border-none rounded-2xl bg-zinc-9 buttonbg hover:scale-105 transition-all mt-5 h-12 text-xl px-3.5 py-2 text-center font-medium text-white shadow !outline-none  hover:bg-zinc-800 focus-visible:outline-[1.5px] focus-visible:outline-offset-2 focus-visible:outline-zinc-500 active:text-white/70">
            Sign In
          </SignIn.Action>
        
        </SignIn.Step>

     </div>
      </SignIn.Root>
      }

      {
        user && <div className="text-white"> <h1 className=' animate-spin text-2xl mt-5 text-gray-400'> <LuLoader /></h1></div>
      }

    </div>
  );
};

export default LoginPage;
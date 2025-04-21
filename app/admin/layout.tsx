import type { Metadata } from "next"; 
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { LogginUser } from "@/actions/admin/adminform";

export const metadata: Metadata = {
  title: "Admin",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  const user = await currentUser();
  const role = user?.publicMetadata.role
  const name =  user?.username

  return (
    <html lang="en">
      <body>
      <Navbar  role={role} name={name}/>
        {children}
      </body>
    </html>

  );
}

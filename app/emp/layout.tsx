import Navbar from "@/components/navbar";
import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Employees",
  description: "Manage your employees",
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

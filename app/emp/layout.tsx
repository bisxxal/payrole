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
    //  const user = await LogginUser()
    //   if (!user || user?.role !== 'emp') {
    //   redirect('/')
    //   }   

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>

  );
}

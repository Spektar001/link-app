import AppSidebar from "@/components/layout/AppSidebar";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Lato } from "next/font/google";
import Image from "next/image";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import "../globals.css";

const lato = Lato({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body className={lato.className}>
        <main className="flex min-h-screen">
          <aside className="bg-white w-48 p-4 border-r shadow">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
              <Image
                src={session?.user?.image!}
                width={256}
                height={256}
                alt={"avatar"}
              />
            </div>
            <div className="text-center">
              <AppSidebar />
            </div>
          </aside>
          <div className="grow">
            <div className="bg-white m-4 p-4 shadow">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}

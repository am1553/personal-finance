import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="lg:grid lg:grid-cols-[20rem_1fr] pb-24">
      <Sidebar />
      {children}
      <MobileNavbar />
    </main>
  );
}

export default AppLayout;

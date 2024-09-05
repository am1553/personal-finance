import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

function AppLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal?: React.ReactNode }>) {
  return (
    <SignedIn>
      <main className="lg:grid lg:grid-cols-[20rem_1fr] pb-24">
        <Sidebar />
        {modal && modal}
        {children}
        <MobileNavbar />
      </main>
    </SignedIn>
  );
}

export default AppLayout;

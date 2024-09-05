"use client";
import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import { SignedIn, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SignedIn>
      <main className="lg:grid lg:grid-cols-[20rem_1fr] pb-24">
        <Sidebar />
        {children}
        <MobileNavbar />
      </main>
    </SignedIn>
  );
}

export default AppLayout;

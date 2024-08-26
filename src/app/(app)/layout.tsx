import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="lg:grid lg:grid-cols-[auto_1fr] h-screen">
      <Sidebar />
      {children}
      <MobileNavbar />
    </main>
  );
}

export default AppLayout;

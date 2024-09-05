"use client";
import React from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "./ui/dialog";
import { useRouter } from "next/navigation";

function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleOpenChange = () => router.back();
  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
      {children}
    </Dialog>
  );
}

export default Modal;

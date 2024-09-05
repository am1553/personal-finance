import Header from "@/components/Header";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SignedOut>
      <main className="flex flex-col h-screen lg:p-8 max-w-screen-2xl mx-auto w-full">
        <Header />
        <section className="flex-1 flex-center lg:hidden px-6">
          {children}
        </section>
        <section className="max-lg:hidden flex-1 grid grid-cols-[auto_1fr] overflow-hidden gap-4 ">
          <div className="bg-authentication bg-cover flex flex-col justify-between p-8 rounded-xl">
            <Image
              src={"images/logo-large.svg"}
              width={122}
              height={22}
              alt="logo"
            />

            <div className="text-white max-w-xl flex flex-col gap-4">
              <h1>Keep track of your money and save for your future</h1>
              <p className="opacity-70">
                Personal finance app puts you in control of your spending. Track
                transactions, set budgets, and add to savings pots easily.
              </p>
            </div>
          </div>
          <div className="flex-center">{children}</div>
        </section>
      </main>
    </SignedOut>
  );
}

export default AuthLayout;

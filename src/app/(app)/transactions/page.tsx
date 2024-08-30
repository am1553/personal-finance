"use client";
import React, { Suspense } from "react";
import TransactionSearchFilterSort from "@/components/TransactionSearchFilterSort";
import { Button } from "@/components/ui/button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TransactionsList from "@/components/TransactionsList";
function TransactionsPage() {
  return (
    <section className="route-section">
      <h1 className="my-4">Transactions</h1>
      <div className="bg-white card relative flex flex-col gap-6">
        <Suspense>
          <TransactionSearchFilterSort />
          <TransactionsList />
        </Suspense>
        <div className="flex gap-4 w-full">
          <Button variant={"outline"} className="w-10 h-10 md:w-fit">
            <ArrowLeftIcon />
            <span className="max-md:hidden ml-2">Prev</span>
          </Button>
          <div className="flex-1 w-full flex items-center justify-evenly md:justify-center md:gap-12">
            <Button variant={"outline"} className="w-10 h-10">
              <span>1</span>
            </Button>
            <Button variant={"outline"} className="w-10 h-10">
              <span>2</span>
            </Button>
            <Button variant={"outline"} className="w-10 h-10">
              <span>3</span>
            </Button>
            <Button variant={"outline"} className="w-10 h-10">
              <span>4</span>
            </Button>
          </div>
          <Button variant={"outline"} className="w-10 h-10 md:w-fit">
            <span className="max-md:hidden mr-2">Next</span>
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TransactionsPage;

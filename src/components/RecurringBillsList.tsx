import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { toCurrency } from "@/lib/utils";

function RecurringBillsList({
  bills,
}: {
  bills: {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
  }[];
}) {
  return (
    <div className="bg-white card">
      <div className="relative flex-1">
        <Input placeholder="Search transaction" className="pr-10" />
        <Image
          src={"images/icon-search.svg"}
          width={16}
          height={16}
          alt="search"
          className="absolute top-2/4 -translate-y-2/4 right-4"
        />
      </div>

      <ul className="flex flex-col gap-4 mt-8">
        {bills.map((bill, i) => {
          return (
            <li key={i}>
              <div className="flex items-center gap-4">
                <Image
                  src={bill.avatar}
                  height={40}
                  width={40}
                  alt={`${bill.name} avatar`}
                  className="rounded-full"
                />
                <span className="flex-1 font-bold">{bill.name}</span>
                <span className="font-bold text-lg">
                  {toCurrency(bill.amount, 2)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecurringBillsList;

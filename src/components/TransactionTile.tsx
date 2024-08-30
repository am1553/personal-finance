import { toCurrency } from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import React from "react";

function TransactionTile({
  transaction,
}: {
  transaction: {
    avatar: string;
    name: string;
    category: string;
    date: string;
    amount: number;
    recurring: boolean;
  };
}) {
  const dateFormat = moment(transaction.date).format("DD MMM YYYY");
  const isNegative = transaction.amount < 0;
  return (
    <li className="flex items-center gap-4 py-4 border-b last:border-0">
      <Image
        src={transaction.avatar}
        width={40}
        height={40}
        alt={`${transaction.name} avatar`}
        className="rounded-full"
      />
      <span className="flex-1 font-bold">{transaction.name}</span>
      <div className="flex flex-col text-right gap-1">
        <span
          className={`font-bold text-xl ${
            isNegative ? "text-grey-900" : "text-green"
          }`}
        >
          {!isNegative && "+"}
          {toCurrency(transaction.amount, 2)}
        </span>
        <span>{dateFormat}</span>
      </div>
    </li>
  );
}

export default TransactionTile;

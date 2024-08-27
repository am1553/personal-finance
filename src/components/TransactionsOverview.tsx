import React from "react";
import OverviewCard from "./OverviewCard";
import data from "../../data.json";
import Image from "next/image";
import moment from "moment";
import { toCurrency } from "@/lib/utils";
function TransactionsOverview() {
  return (
    <OverviewCard title="Transactions" label="View All" link="/transactions">
      <ul className="flex flex-col gap-2">
        {data.transactions.map((transaction, i) => {
          if (i > 4) return;
          const dateFormat = moment(transaction.date).format("DD MMM YYYY");
          const isNegative = transaction.amount < 0;
          return (
            <li
              key={i}
              className="flex items-center gap-4 py-4 border-b last:border-0"
            >
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
        })}
      </ul>
    </OverviewCard>
  );
}

export default TransactionsOverview;

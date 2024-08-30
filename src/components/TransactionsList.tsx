import { useSearchParams } from "next/navigation";
import React from "react";
import data from "../../data.json";
import TransactionTile from "./TransactionTile";

function TransactionsList() {
  const { transactions } = data;
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const filters = searchParams.getAll("filter");

  return (
    <div>
      {transactions
        .filter((transaction, i) => {
          if (i > 10) return;
          if (!search) return transaction;
          if (transaction.name.toLowerCase().includes(search.toLowerCase())) {
            return transaction;
          }
        })
        .filter((transaction) => {
          if (filters.length < 1) return transaction;
          if (filters.includes(transaction.category.toLowerCase()))
            return transaction;
        })
        .map((transaction, i) => {
          return <TransactionTile key={i} transaction={transaction} />;
        })}
    </div>
  );
}

export default TransactionsList;

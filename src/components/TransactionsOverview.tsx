import React from "react";
import OverviewCard from "./OverviewCard";
import data from "../../data.json";
import TransactionTile from "./TransactionTile";
function TransactionsOverview() {
  return (
    <OverviewCard title="Transactions" label="View All" link="/transactions">
      <ul className="flex flex-col gap-2">
        {data.transactions.map((transaction, i) => {
          if (i > 4) return;
          return <TransactionTile key={i} transaction={transaction} />;
        })}
      </ul>
    </OverviewCard>
  );
}

export default TransactionsOverview;

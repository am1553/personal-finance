import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toCurrency } from "@/lib/utils";
import data from "../../data.json";
import ThemeLabel from "./ThemeLabel";
import OverviewCard from "./OverviewCard";
import moment from "moment";
function SummaryCard({
  budget,
}: {
  budget: { theme: string; category: string; maximum: number };
}) {
  const transactions = data.transactions.filter(
    (transaction) =>
      transaction.category.toLowerCase() === budget.category.toLowerCase()
  );
  const spent = transactions
    .map((transaction) => Math.abs(transaction.amount))
    .reduce((a, b) => a + b);
  const percentageUsed =
    (spent / budget.maximum) * 100 > 100 ? 100 : (spent / budget.maximum) * 100;
  return (
    <div className="card bg-white flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          className={`h-4 w-4 rounded-full`}
          style={{ backgroundColor: budget.theme }}
        />
        <span className="capitalize text-xl font-bold flex-1">
          {budget.category}
        </span>
        <MoreHorizIcon className="text-grey-300" />
      </div>
      <span className="text-sm text-grey-500">
        Maximum of {toCurrency(budget.maximum, 2)}
      </span>
      <div className="h-8 p-1 w-full rounded-md bg-beige-100">
        <div
          className="h-full rounded-md"
          style={{
            backgroundColor: budget.theme,
            width: `${percentageUsed}%`,
          }}
        ></div>
      </div>
      <div className="grid grid-cols-2">
        <ThemeLabel color={budget.theme}>
          <span>Spent</span>
          <span className="font-bold">{toCurrency(spent, 2)}</span>
        </ThemeLabel>
        <ThemeLabel color={"#F8F4F0"}>
          <span>Free</span>
          <span className="font-bold">
            {budget.maximum - spent < 0
              ? toCurrency(0, 0)
              : toCurrency(budget.maximum - spent, 0)}
          </span>
        </ThemeLabel>
      </div>
      <OverviewCard
        title="Latest Spending"
        label="See All"
        link="/transactions"
        size="sm"
        className="bg-beige-100"
      >
        <ul className="flex flex-col gap-4">
          {transactions.map((transaction, i) => {
            if (i > 2) return;
            const dateFormat = moment(transaction.date).format("DD MMM YYYY");
            return (
              <div key={i}>
                <li key={i} className="flex justify-between items-center gap-2">
                  <span className="font-bold flex-1">{transaction.name}</span>
                  <div className="flex flex-col text-right">
                    <span className="font-bold">
                      {toCurrency(transaction.amount, 2)}
                    </span>
                    <span>{dateFormat}</span>
                  </div>
                </li>
                {i != 2 && <hr />}
              </div>
            );
          })}
        </ul>
      </OverviewCard>
    </div>
  );
}

export default SummaryCard;

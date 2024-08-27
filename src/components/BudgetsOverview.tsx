import React from "react";
import OverviewCard from "./OverviewCard";
import data from "../../data.json";
import BudgetsDoughtnutChart from "./BudgetsDoughtnutChart";
import { toCurrency } from "@/lib/utils";
import ThemeLabel from "./ThemeLabel";

function BudgetsOverview() {
  const { budgets } = data;
  return (
    <OverviewCard title="Budgets" label="See Details" link="/budgets">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-[1fr_auto] mb-10">
        <div className="w-full flex items-center justify-center">
          <BudgetsDoughtnutChart limit={975} spent={338} />
        </div>
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-4 md:flex md:flex-col">
          {budgets.map((budget, i) => {
            return (
              <ThemeLabel color={budget.theme} key={i}>
                <span className="text-grey-500">New Laptop</span>
                <span className="text-xl font-bold">$10</span>
              </ThemeLabel>
            );
          })}
        </ul>
      </div>
    </OverviewCard>
  );
}

export default BudgetsOverview;

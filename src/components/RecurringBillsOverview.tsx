import React from "react";
import OverviewCard from "./OverviewCard";
import data from "../../data.json";
import ThemeLabel from "./ThemeLabel";
import { toCurrency } from "@/lib/utils";
function RecurringBillsOverview() {
  return (
    <OverviewCard
      title="Recurring Bills"
      label="See Details"
      link="/recurring-bills"
    >
      <ul className="flex flex-col gap-4">
        <li className="card relative z-10 before:absolute before:bg-beige-100 before:top-0 before:bottom-0 before:left-1.5 before:right-0 before:rounded-lg before:-z-10 bg-green h-20 flex items-center">
          <span className="flex-1 text-lg text-grey-500">Paid Bills</span>
          <span className="font-bold text-xl">$190.00</span>
        </li>
        <li className="card relative z-10 before:absolute before:bg-beige-100 before:top-0 before:bottom-0 before:left-1.5 before:right-0 before:rounded-lg before:-z-10 bg-yellow h-20 flex items-center">
          <span className="flex-1 text-lg text-grey-500">Total Upcoming</span>
          <span className="font-bold text-xl">$194.98</span>
        </li>
        <li className="card relative z-10 before:absolute before:bg-beige-100 before:top-0 before:bottom-0 before:left-1.5 before:right-0 before:rounded-lg before:-z-10 bg-cyan h-20 flex items-center">
          <span className="flex-1 text-lg text-grey-500">Due Soon</span>
          <span className="font-bold text-xl">$59.98</span>
        </li>
      </ul>
    </OverviewCard>
  );
}

export default RecurringBillsOverview;

import React from "react";
import BudgetsDoughtnutChart from "./BudgetsDoughtnutChart";
import { toCurrency } from "@/lib/utils";

function SpendingSummary({ displayRow = false }: { displayRow?: boolean }) {
  return (
    <div
      className={`card bg-white flex flex-col gap-4 h-fit ${
        displayRow ? "" : "md:grid md:grid-cols-[auto_1fr] md:gap-12"
      }`}
    >
      <BudgetsDoughtnutChart limit={975.34} spent={338.55} />
      <div className="flex flex-col gap-4">
        <span className="text-xl font-bold">Spending Summary</span>
        <ul className="flex flex-col gap-3">
          <li className="flex justify-between">
            <span className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-cyan pl-4">
              Bills
            </span>
            <div>
              <span className="font-bold">{toCurrency(250, 2)} </span>
              of
              <span className="text-sm"> {toCurrency(750, 2)}</span>
            </div>
          </li>
          <hr />
          <li className="flex justify-between">
            <span className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-yellow pl-4">
              Dining Out
            </span>
            <div>
              <span className="font-bold">{toCurrency(67, 2)} </span>
              of
              <span className="text-sm"> {toCurrency(75, 2)}</span>
            </div>
          </li>
          <hr />
          <li className="flex justify-between">
            <span className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-navy pl-4">
              Personal Care
            </span>
            <div>
              <span className="font-bold">{toCurrency(65, 2)} </span>
              of
              <span className="text-sm"> {toCurrency(100, 2)}</span>
            </div>
          </li>
          <hr />
          <li className="flex justify-between">
            <span className="relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green pl-4">
              Entertainment
            </span>
            <div>
              <span className="font-bold">{toCurrency(25, 2)} </span>
              of
              <span className="text-sm"> {toCurrency(50, 2)}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpendingSummary;

import { toCurrency } from "@/lib/utils";
import React from "react";

function BillsSummaryCard({
  paid,
  upcoming,
  due,
}: {
  paid: number[];
  upcoming: number[];
  due: number[];
}) {
  const totalPaid = paid.reduce((a, b) => a + b);
  const totalUpcoming = upcoming.reduce((a, b) => a + b);
  const totalDue = due.reduce((a, b) => a + b);

  return (
    <div className="card bg-white flex flex-col gap-2">
      <span className="font-bold text-lg">Summary</span>
      <ul className="flex flex-col">
        <li className="flex gap-6 justify-between h-10 items-center">
          <span>Paid Bills</span>
          <span className="font-bold">
            {paid.length} ({toCurrency(totalPaid, 2)})
          </span>
        </li>
        <hr />
        <li className="flex gap-6 justify-between h-10 items-center">
          <span>Total Upcoming</span>
          <span className="font-bold">
            {upcoming.length} ({toCurrency(totalUpcoming, 2)})
          </span>
        </li>
        <hr />
        <li className="text-red flex gap-6 justify-between h-10 items-center">
          <span>Due Soon</span>
          <span className="font-bold">
            {paid.length} ({toCurrency(totalDue, 2)})
          </span>
        </li>
      </ul>
    </div>
  );
}

export default BillsSummaryCard;

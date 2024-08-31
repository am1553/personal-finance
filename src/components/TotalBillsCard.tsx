import { toCurrency } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function TotalBillsCard({ total }: { total: number }) {
  return (
    <div className="bg-black text-white card flex gap-6 sm:flex-col sm:justify-between">
      <Image
        src={"images/icon-recurring-bills.svg"}
        height={40}
        width={40}
        alt="recurring bills"
      />
      <div className="flex flex-col gap-2">
        <span>Total bills</span>
        <span className="text-2xl font-bold">{toCurrency(total, 2)}</span>
      </div>
    </div>
  );
}

export default TotalBillsCard;

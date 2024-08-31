"use client";
import BillsSummaryCard from "@/components/BillsSummaryCard";
import TotalBillsCard from "@/components/TotalBillsCard";
import React from "react";
import data from "../../../../data.json";
import RecurringBillsList from "@/components/RecurringBillsList";
function RecurringBillsPage() {
  const { transactions } = data;
  const recurringBills = transactions.filter(
    (transaction) => transaction.recurring
  );

  return (
    <section className="route-section">
      <div>
        <h1 className="my-4">Recurring Bills</h1>
      </div>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[auto_1fr]">
        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-col">
          <TotalBillsCard total={384.98} />
          <BillsSummaryCard
            paid={[160, 160]}
            upcoming={[615, 615]}
            due={[10, 10]}
          />
        </div>
        <RecurringBillsList bills={recurringBills} />
      </div>
    </section>
  );
}

export default RecurringBillsPage;

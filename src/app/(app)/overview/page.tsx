import AmountCard from "@/components/AmountCard";
import BudgetsOverview from "@/components/BudgetsOverview";
import PotsOverview from "@/components/PotsOverview";
import RecurringBillsOverview from "@/components/RecurringBillsOverview";
import TransactionsOverview from "@/components/TransactionsOverview";
import React from "react";

function OverviewPage() {
  return (
    <section className="route-section">
      <h1 className="my-4">Overview</h1>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
        <AmountCard
          cardID="current-balance-overview-card"
          title="Current Balance"
          amount={4836}
          theme="dark"
        />
        <AmountCard
          cardID="income-overview-card"
          title="Income"
          amount={3814}
          theme="light"
        />
        <AmountCard
          cardID="expenses-overview-card"
          title="Expenses"
          amount={1700.5}
          theme="light"
        />
      </div>
      <div className="flex flex-col gap-6 2xl:grid 2xl:grid-cols-5">
        <div className="flex flex-col gap-6 2xl:col-span-3">
          <PotsOverview />
          <TransactionsOverview />
        </div>
        <div className="flex flex-col gap-6 2xl:col-span-2">
          <BudgetsOverview />
          <RecurringBillsOverview />
        </div>
      </div>
    </section>
  );
}

export default OverviewPage;

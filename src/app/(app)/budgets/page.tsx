"use client";
import { Button } from "@/components/ui/button";
import { Add } from "@mui/icons-material";
import React from "react";
import data from "../../../../data.json";
import SpendingSummary from "@/components/SpendingSummary";
import BudgetSummaryCard from "@/components/BudgetSummaryCard";
import Link from "next/link";
import AddBudgetForm from "@/components/forms/AddBudgetForm";

function BudgetsPage() {
  const { budgets } = data;
  return (
    <section className="route-section">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Budgets</h1>
        <Link href={"budgets/add"}>
          <Button variant={"primary"} className="w-fit">
            <Add className="h-4" />
            <span>Add New Budget</span>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_2fr]">
        <div className="">
          <SpendingSummary displayRow />
        </div>
        <div className="flex flex-col gap-12 lg:col-start-2">
          {budgets.map((budget) => (
            <BudgetSummaryCard
              key={budget.category.toLowerCase()}
              budget={budget}
            />
          ))}
        </div>
      </div>

      {/* <AddBudgetForm /> */}
    </section>
  );
}

export default BudgetsPage;

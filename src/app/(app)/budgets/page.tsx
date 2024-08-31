"use client";
import { Button } from "@/components/ui/button";
import { Add } from "@mui/icons-material";
import React from "react";
import data from "../../../../data.json";
import SpendingSummary from "@/components/SpendingSummary";
import SummaryCard from "@/components/SummaryCard";

function BudgetsPage() {
  const { budgets } = data;
  return (
    <section className="route-section">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Budgets</h1>
        <Button variant={"primary"} className="w-fit">
          <Add className="h-4" />
          <span>Add New Budget</span>
        </Button>
      </div>
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_2fr]">
        <div className="">
          <SpendingSummary displayRow />
        </div>
        <div className="flex flex-col gap-12 lg:col-start-2">
          {budgets.map((budget) => (
            <SummaryCard key={budget.category.toLowerCase()} budget={budget} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetsPage;

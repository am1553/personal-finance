"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Chart from "chart.js/auto";
import data from "../../data.json";
import { toCurrency } from "@/lib/utils";

const Doughnut = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Doughnut),
  { ssr: false }
);

function BudgetsDoughtnutChart({
  limit = 975.34,
  spent = 338.55,
}: {
  limit: number;
  spent: number;
}) {
  useEffect(() => {
    Chart.overrides["doughnut"].plugins.legend.display = false;
  }, []);
  const labels = data.budgets.map((budget) => budget.category);
  const budgetAmounts = data.budgets.map((budget) => budget.maximum);
  const datasets = [
    {
      label: "Budgets",
      data: budgetAmounts,
      backgroundColor: data.budgets.map((budget) => budget.theme),
      borderWidth: 0,
      cutout: "80%",
    },
  ];
  const datasetsInner = [
    {
      label: "Budgets",
      data: budgetAmounts,
      backgroundColor: data.budgets.map((budget) => `${budget.theme}90`),
      borderWidth: 0,
      cutout: "80%",
      radius: "85%",
      options: {
        plugins: {
          tooltip: false,
        },
      },
    },
  ];
  return (
    <div className="relative mx-auto w-64 h-64">
      <Doughnut
        data={{ labels, datasets }}
        width={2}
        className="relative z-10"
      />
      <Doughnut
        data={{
          labels,
          datasets: datasetsInner,
        }}
        width={2}
        className="absolute top-0 bottom-0 left-0 right-0"
      />
      <div className="flex flex-col absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-center">
        <span className="font-bold text-2xl">{toCurrency(spent, 0)}</span>
        <span className="text-grey-500">of {toCurrency(limit, 0)} limit</span>
      </div>
    </div>
  );
}

export default BudgetsDoughtnutChart;

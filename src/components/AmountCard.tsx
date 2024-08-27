import React from "react";

function AmountCard({
  title,
  amount,
  theme,
  cardID,
}: {
  title: string;
  amount: number;
  theme: "light" | "dark";
  cardID: string;
}) {
  const amountFormat = amount.toFixed(2);
  return (
    <div
      className={`flex flex-col ${
        theme === "light" ? "bg-white text-grey-900" : "bg-grey-900 text-white"
      } card gap-2`}
      id={cardID}
    >
      <span className="text-grey-500">{title}</span>
      <span className="text-3xl font-bold">${amountFormat}</span>
    </div>
  );
}

export default AmountCard;

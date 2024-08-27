import Image from "next/image";
import Link from "next/link";
import React from "react";
import OverviewCard from "./OverviewCard";
import ThemeLabel from "./ThemeLabel";

function PotsOverview() {
  return (
    <OverviewCard label="See Details" title="Pots" link="/pots">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
        <div className="bg-beige-100 card flex gap-6 items-center">
          <Image
            src={"images/icon-pot.svg"}
            height={0}
            width={0}
            alt="savings pot"
            style={{ height: "100%", width: "auto" }}
          />
          <div className="flex flex-col gap-2">
            <span>Total Saved</span>
            <span className="text-4xl font-bold">$850</span>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
          <ThemeLabel color="#277C78">
            <span className="text-grey-500">Savings</span>
            <span className="text-xl font-bold">$159</span>
          </ThemeLabel>
          <ThemeLabel color="#82C9D7">
            <span className="text-grey-500">Gift</span>
            <span className="text-xl font-bold">$40</span>
          </ThemeLabel>
          <ThemeLabel color="#626070">
            <span className="text-grey-500">Concert Ticket</span>
            <span className="text-xl font-bold">$110</span>
          </ThemeLabel>
          <ThemeLabel color="#F2CDAC">
            <span className="text-grey-500">New Laptop</span>
            <span className="text-xl font-bold">$10</span>
          </ThemeLabel>
        </div>
      </div>
    </OverviewCard>
  );
}

export default PotsOverview;

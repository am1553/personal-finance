import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toCurrency, toPercentage } from "@/lib/utils";
import ProgressBar from "./ProgressBar";
import { Button } from "./ui/button";
import { Add } from "@mui/icons-material";
function PotCard({
  pot,
}: {
  pot: {
    name: string;
    target: number;
    total: number;
    theme: string;
  };
}) {
  const percentage = (pot.total / pot.target) * 100;
  return (
    <div className="card bg-white flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div
          className={`h-4 w-4 rounded-full`}
          style={{ backgroundColor: pot.theme }}
        />
        <span className="capitalize text-xl font-bold flex-1">{pot.name}</span>
        <MoreHorizIcon className="text-grey-300" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-grey-500">Total Saved</span>
          <span className="text-xl font-bold">{toCurrency(159, 2)}</span>
        </div>
        <div className="flex flex-col gap-2">
          <ProgressBar
            color={pot.theme}
            percentage={percentage > 100 ? 100 : percentage}
          />
          <div className="flex items-center justify-between">
            <span className="font-bold text-grey-500">
              {toPercentage(percentage)}
            </span>
            <span>Target of {toCurrency(pot.target, 0)}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Button variant={"secondary"} className="font-bold">
          <Add />
          <span>Add Money</span>
        </Button>
        <Button variant={"secondary"} className="font-bold">
          <span>Withdraw</span>
        </Button>
      </div>
    </div>
  );
}

export default PotCard;

import PotCard from "@/components/PotCard";
import { Button } from "@/components/ui/button";
import { Add } from "@mui/icons-material";
import React from "react";
import data from "../../../../data.json";
function PotsPage() {
  const { pots } = data;
  return (
    <section className="route-section">
      <div className="flex items-center justify-between">
        <h1 className="my-4">Pots</h1>
        <Button variant={"primary"} className="w-fit">
          <Add className="h-4" />
          <span>Add New Pot</span>
        </Button>
      </div>
      <ul className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
        {pots.map((pot) => (
          <li key={pot.name.toLowerCase()}>
            <PotCard pot={pot} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PotsPage;

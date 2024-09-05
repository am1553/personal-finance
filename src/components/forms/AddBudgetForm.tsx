import React from "react";
import { Label } from "../ui/label";
import data from "../../../data.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function AddBudgetForm() {
  const { budgets } = data;
  const categories = budgets.map((budget) => budget.category);
  return (
    <form action="" className="card bg-white flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">Add New Budget</h2>
        <p className="text-grey-500">
          Choose a category to set a spending budget. These categories can help
          you monitor spending.
        </p>
      </div>
      <Label htmlFor="category">Budget Category</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={categories[0]} />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem
              key={category.toLowerCase()}
              value={category.toLowerCase()}
            >
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label htmlFor="max-spend">Budget Category</Label>
      <div className="relative w-full h-fit">
        <AttachMoneyIcon className="absolute top-2/4 left-2 -translate-y-2/4 text-base text-grey-500" />
        <Input type="number" className="pl-12" min={0}></Input>
      </div>
    </form>
  );
}

export default AddBudgetForm;

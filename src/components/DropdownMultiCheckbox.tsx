"use client";
import React, { ChangeEvent } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "./ui/checkbox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function DropdownMultiCheckbox({
  trigger,
  label,
  items,
  callBack,
}: {
  trigger: React.JSX.Element;
  label: string;
  items: string[];
  callBack?: () => {};
}) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const filters = searchParams.getAll("filter");
  const handleSelect = (checked: boolean, item: string) => {
    if (callBack) {
      callBack();
    } else {
      const params = new URLSearchParams(searchParams);
      console.log(params);
      if (filters.includes(item.toLowerCase())) {
        params.delete("filter", item.toLowerCase());
      } else {
        params.append("filter", item.toLowerCase());
      }
      replace(`${pathname}?${params.toString()}`);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center gap-4" key={item.toLowerCase()}>
              <Checkbox
                id={item.toLowerCase()}
                defaultChecked={filters.includes(item.toLowerCase())}
                onCheckedChange={(checked: boolean) =>
                  handleSelect(checked, item)
                }
              />
              <div className="">
                <label htmlFor={item.toLowerCase()}>{item}</label>
              </div>
            </div>
            {i < items.length - 1 && <DropdownMenuSeparator />}
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropdownMultiCheckbox;

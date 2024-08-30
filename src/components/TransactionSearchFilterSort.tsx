"use client";
import React, { ChangeEvent, Suspense } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { Input } from "./ui/input";
import data from "../../data.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DropdownMultiCheckbox from "./DropdownMultiCheckbox";
function TransactionSearchFilterSort() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const categories: string[] = [];
  const { transactions } = data;

  transactions.forEach((transaction) => {
    if (categories.includes(transaction.category)) return;
    categories.push(transaction.category);
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleFilter = (selected: string) => {};

  return (
    <div className="flex gap-4 relative">
      <div className="relative w-fit flex-1">
        <Input
          placeholder="Search transaction"
          className="pr-10"
          onChange={handleSearch}
        />
        <Image
          src={"images/icon-search.svg"}
          width={16}
          height={16}
          alt="search"
          className="absolute top-2/4 -translate-y-2/4 right-4"
        />
      </div>
      <Dropdown
        label="Sort by"
        trigger={
          <div>
            <Image
              src={"images/icon-sort-mobile.svg"}
              width={16}
              height={16}
              alt="sort"
            />
          </div>
        }
        items={["latest", "oldest", "A to Z", "Z to A", "highest", "lowest"]}
      />
      <Suspense>
        <DropdownMultiCheckbox
          label={"Category"}
          items={categories}
          trigger={
            <div>
              <Image
                src={"images/icon-filter-mobile.svg"}
                width={16}
                height={16}
                alt="sort"
              />
            </div>
          }
        />
      </Suspense>
    </div>
  );
}

export default TransactionSearchFilterSort;

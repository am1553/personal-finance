import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toCurrency(amount: number, decimal: number) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimal,
  });
  return USDollar.format(amount);
}

export function toPercentage(num: number) {
  return `${Math.round((num + Number.EPSILON) * 100) / 100}%`;
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

function OverviewCard({
  title,
  link,
  children,
  label,
  size = "md",
  className,
}: {
  title: string;
  link: string;
  children: React.ReactNode;
  label: string;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div className={`card 2xl:h-full ${className ? className : "bg-white"}`}>
      <div className="flex justify-between mb-6 md:mb-10">
        <span className={`${size === "md" ? "text-2xl" : "text-lg"} font-bold`}>
          {title}
        </span>
        <Link href={link} className="flex items-center gap-4">
          <span>{label}</span>
          <Image
            src={"images/icon-caret-right.svg"}
            alt="right arrow"
            height={0}
            width={0}
            style={{ height: "0.75rem", width: "auto" }}
          />
        </Link>
      </div>
      {children}
    </div>
  );
}

export default OverviewCard;

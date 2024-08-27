"use client";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function MobileNavbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-grey-900 px-6 pt-4 rounded-t-lg lg:hidden z-10">
      <ul className="grid grid-cols-5">
        {routes.map((route) => (
          <li
            key={route.id}
            className={`${
              pathname.startsWith(route.path)
                ? "bg-white after:absolute after:h-1 after:bottom-0 after:left-0 after:right-0 after:bg-green"
                : "bg-transparent"
            } rounded-t-lg relative`}
          >
            <Link
              href={route.path}
              className="w-full h-full flex gap-1 flex-col items-center justify-center py-3"
            >
              <Image
                src={route.img}
                width={0}
                height={0}
                alt={route.label}
                style={{
                  filter: pathname.startsWith(route.path)
                    ? "brightness(0) saturate(100%) invert(40%) sepia(53%) saturate(512%) hue-rotate(128deg) brightness(90%) contrast(88%)"
                    : "",
                  height: "20px",
                  width: "auto",
                }}
              />
              <span
                className={`text-xs font-bold max-sm:hidden ${
                  pathname.startsWith(route.path)
                    ? "text-grey-900"
                    : "text-grey-300"
                }`}
              >
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavbar;

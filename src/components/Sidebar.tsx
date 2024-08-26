"use client";
import { routes } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const minimizeMenu = () => setIsOpen(false);
  return (
    <aside className="max-lg:hidden bg-grey-900 overflow-hidden flex flex-col gap-14 rounded-r-2xl w-80">
      <Image
        src={"images/logo-large.svg"}
        height={22}
        width={122}
        alt="logo"
        className="mx-8 mt-12"
      />
      <nav className="flex-1 mr-8">
        <ul className="w-full">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`${
                pathname.startsWith(route.path)
                  ? "bg-white after:absolute after:w-1 after:left-0 after:top-0 after:bottom-0 after:bg-green"
                  : "bg-transparent"
              } relative rounded-r-xl w-full`}
            >
              <Link
                href={route.path}
                className="w-full h-full flex gap-4 items-center justify-start py-4 pl-8"
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
                    width: "20px",
                  }}
                />
                <span
                  className={`text-base font-bold max-sm:hidden ${
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
      <div className="mx-8 mb-12">
        <Button variant={"primary"}>Logout</Button>
      </div>
    </aside>
  );
}

export default Sidebar;

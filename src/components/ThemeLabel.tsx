import React from "react";

function ThemeLabel({
  color,
  children,
  className,
}: {
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={`flex flex-col px-6 gap-2 bg-opacity-0 relative ${className}`}
    >
      <div
        className="absolute w-1.5 left-0 top-0 bottom-0 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      {children}
    </li>
  );
}

export default ThemeLabel;

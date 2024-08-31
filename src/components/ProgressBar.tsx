import React from "react";

function ProgressBar({
  percentage,
  color,
}: {
  percentage: number;
  color: string;
}) {
  return (
    <div className="h-8 p-1 w-full rounded-md bg-beige-100">
      <div
        className="h-full rounded-md"
        style={{
          backgroundColor: color,
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;

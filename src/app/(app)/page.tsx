import { redirect } from "next/navigation";
import React from "react";

function AppPage() {
  redirect("/overview");
  return <div></div>;
}

export default AppPage;

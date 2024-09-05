import { redirect } from "next/navigation";
import React from "react";

function App() {
  redirect("/overview");
  return <div>Invalid url</div>;
}

export default App;

import { SignIn } from "@clerk/nextjs";
import React from "react";

function LoginPage() {
  return <SignIn routing="hash" fallbackRedirectUrl={"/overview"} />;
}

export default LoginPage;

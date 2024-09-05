import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignupPage() {
  return <SignUp routing="hash" fallbackRedirectUrl={"/overview"} />;
}

export default SignupPage;

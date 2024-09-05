import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignupPage() {
  return <SignUp routing="hash" />;
}

export default SignupPage;

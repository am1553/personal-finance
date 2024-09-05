import AuthForm from "@/components/forms/AuthForm";
import { SignIn } from "@clerk/nextjs";
import React from "react";

function LoginPage() {
  return (
    <AuthForm type="login">
      <SignIn routing="hash" />
    </AuthForm>
  );
}

export default LoginPage;

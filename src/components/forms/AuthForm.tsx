import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

function AuthForm({
  type,
  children,
}: {
  type: "login" | "signup";
  children: React.JSX.Element;
}) {
  return (
    // <form action="" className="bg-card p-8 rounded-lg w-full max-w-screen-sm">
    //   <h1 className="pb-6">{type === "login" ? "Login" : "Sign up"}</h1>
    //   <div className="flex flex-col gap-2 mb-8 md:mb-6">
    //     {type === "signup" && (
    //       <>
    //         <Label htmlFor="name">Name</Label>
    //         <Input type="text" id="name" name="name" />
    //       </>
    //     )}
    //     <Label htmlFor="email">Email</Label>
    //     <Input type="email" id="email" name="email" />
    //     {type === "login" ? (
    //       <>
    //         <Label htmlFor="password">Password</Label>
    //         <Input type="password" id="password" name="password" />
    //       </>
    //     ) : (
    //       <>
    //         <Label htmlFor="password">Create Password</Label>
    //         <Input type="password" id="password" name="password" />
    //         <span className="text-grey-500 text-right">
    //           Password must be atleast 8 characters
    //         </span>
    //       </>
    //     )}
    //   </div>
    //   <Button variant={"primary"}>
    //     {type === "login" ? "Login" : "Create account"}
    //   </Button>
    //   <span className="inline-block text-center w-full mt-4">
    //     {type === "login" ? (
    //       <span>Need to create an account? </span>
    //     ) : (
    //       <span>Already have an account? </span>
    //     )}

    //     {type === "login" ? (
    //       <Link href={"/signup"} className="font-bold text-grey-900 underline">
    //         Sign Up
    //       </Link>
    //     ) : (
    //       <Link href={"/login"} className="font-bold text-grey-900 underline">
    //         Login
    //       </Link>
    //     )}
    //   </span>
    // </form>
    <div>{children}</div>
  );
}

export default AuthForm;

import AuthForm from "@/components/forms/auth-form";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Authentication form", () => {
  it("renders correctly for login type", () => {
    render(<AuthForm type="login" />);

    expect(screen.getByText("Login"));
  });
});

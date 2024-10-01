import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomePage } from "@/app/(website)/(pages)/home/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

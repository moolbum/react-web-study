import React from "react";
import { render, screen } from "@testing-library/react";
import Main from ".";

test("Main Render Test", () => {
  render(<Main />);
  const linkElement = screen.getByText("Main Page");
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import App from "../App";

test("Menyapa prawito", () => {
    render(<App />);
    const text = screen.getByText("Hello World");
    expect(text).toBeInTheDocument();
});

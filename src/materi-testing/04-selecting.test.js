import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Testing untuk seluruh App saat pertama render", () => {
    it("Memastikan kontent text P sesuai saat pertama render", () => {
        render(<App />);
        const textP = screen.getByText("Saya sedang sembunyi");
        expect(textP).toBeInTheDocument();
    });

    it("Memastikan kontent button sesuai saat pertama render", () => {
        render(<App />);
        const textBtn = screen.getByText("Munculkan");
        expect(textBtn).toBeInTheDocument();
    });
});

describe("Testing untuk seluruh App setelah melakukan action click pada button", () => {
    it("Memastikan kontent text P sesuai setelah action click button", () => {
        render(<App />);
        const textBtn = screen.getByText("Munculkan");
        fireEvent.click(textBtn);

        const textP = screen.getByText("Saya sedang muncul");
        expect(textP).toBeInTheDocument();
    });

    it("Memastikan kontent button sesuai setelah action click button", () => {
        render(<App />);
        const textBtn = screen.getByTestId("button-fireEvent");
        fireEvent.click(textBtn);

        const textBtnResult = screen.getByText("Sembunyikan");
        expect(textBtnResult).toBeInTheDocument();
    });
});

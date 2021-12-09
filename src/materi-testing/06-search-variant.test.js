import { screen, render } from "@testing-library/react";
import App from "../App";

describe("Testing semua aplikasi di dalam App", () => {
    it("melakukan testing untuk queryBy dan findBy", async () => {
        render(<App />);
        expect(screen.queryByText(/Selamat datang/)).toBeNull();
        // screen.debug();
        expect(await screen.findByText(/Selamat datang/)).toBeInTheDocument();
        // screen.debug();
    });
});

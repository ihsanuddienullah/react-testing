import { sumValue, multiValue } from "./angka.js";
import { potonganPajak, sapaan } from "./string.js";

test("Menyapa nama", () => {
    expect(sapaan("Prawito")).toBe("Halo Prawito");
});

test("Mengetahui gaji bersih dikurangi pajak", () => {
    expect(potonganPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
});

test("basic testing", () => {
    expect(true).toBe(true);
});

test("total value", () => {
    expect(1 + 1).toBe(2);
});

// minimal 3 test case
test("total function", () => {
    expect(sumValue(3, 2)).toBe(5);
    expect(sumValue(4, 8)).toBe(12);
});

// minimal 3 test case
test("multiply function", () => {
    expect(multiValue(2, 4)).toBe(8);
    expect(multiValue(3, 5)).toBe(15);
});

// Group testing

describe("Group testing angka", () => {
    test("total value", () => {
        expect(1 + 1).toBe(2);
    });

    // minimal 3 test case
    test("total function", () => {
        expect(sumValue(3, 2)).toBe(5);
        expect(sumValue(4, 8)).toBe(12);
    });

    // minimal 3 test case
    it("multiply function", () => {
        expect(multiValue(2, 4)).toBe(8);
        expect(multiValue(3, 5)).toBe(15);
    });
});

describe("Group testing string", () => {
    it("Menyapa nama", () => {
        expect(sapaan("Prawito")).toBe("Halo Prawito");
    });

    it("Mengetahui gaji bersih dikurangi pajak", () => {
        expect(potonganPajak(10000000)).toBe(`Gaji bersih anda Rp${9000000}`);
    });
});

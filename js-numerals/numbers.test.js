const { stringifyNumber } = require("./utils/numbers");

describe("stringifyNumber", () => {
    it("should convert numbers correctly", () => {
        expect(stringifyNumber(0)).toBe("zero");
        expect(stringifyNumber(1)).toBe("one");
        expect(stringifyNumber(23)).toBe("twenty-three");
        expect(stringifyNumber(81)).toBe("eighty-one");
        expect(stringifyNumber(20)).toBe("twenty");
        expect(stringifyNumber(221)).toBe("two hundred and twenty-one");
        expect(stringifyNumber(201)).toBe("two hundred and one");
        expect(stringifyNumber(200)).toBe("two hundred");
        expect(stringifyNumber(2000)).toBe("two thousand");
        expect(stringifyNumber(2010)).toBe("two thousand and ten");

        expect(stringifyNumber(2222)).toBe(
            "two thousand two hundred and twenty-two"
        );
        expect(stringifyNumber(123411)).toBe(
            "one hundred and twenty-three thousand four hundred and eleven"
        );
        expect(stringifyNumber(1000000)).toBe("Number is too big");
        expect(stringifyNumber("hello")).toBe("input must be a number");
        expect(stringifyNumber()).toBe("input must be a number");
        //given tests
        expect(stringifyNumber(7)).toBe("seven");
        expect(stringifyNumber(42)).toBe("forty-two");
        expect(stringifyNumber(2001)).toBe("two thousand and one");
        expect(stringifyNumber(1999)).toBe("nineteen hundred and ninety-nine");
        expect(stringifyNumber(17999)).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
    });
});

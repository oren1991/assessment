const { stringifyNumber } = require("./utils/numbers");

describe("stringifyNumber", () => {
    it("should convert one digit numbers", () => {
        expect(stringifyNumber(0)).toBe("zero");
        expect(stringifyNumber(6)).toBe("six");
        expect(stringifyNumber(8)).toBe("eight");
        expect(stringifyNumber(2)).toBe("two");
        expect(stringifyNumber(4)).toBe("four");
    });

    it("should convert two digit numbers", () => {
        expect(stringifyNumber(23)).toBe("twenty-three");
        expect(stringifyNumber(81)).toBe("eighty-one");
        expect(stringifyNumber(20)).toBe("twenty");
        expect(stringifyNumber(56)).toBe("fifty-six");
    });

    it("should convert 3 digit numbers", () => {
        expect(stringifyNumber(221)).toBe("two hundred and twenty-one");
        expect(stringifyNumber(201)).toBe("two hundred and one");
        expect(stringifyNumber(200)).toBe("two hundred");
        expect(stringifyNumber(520)).toBe("five hundred and twenty");
        expect(stringifyNumber(753)).toBe("seven hundred and fifty-three");
        expect(stringifyNumber(100)).toBe("one hundred");
    });

    it("should convert 4 digit numbers", () => {
        expect(stringifyNumber(2000)).toBe("two thousand");
        expect(stringifyNumber(2010)).toBe("two thousand and ten");
        expect(stringifyNumber(2100)).toBe("two thousand and one hundred");
        expect(stringifyNumber(6179)).toBe(
            "six thousand one hundred and seventy-nine"
        );
        expect(stringifyNumber(1988)).toBe("nineteen hundred and eighty-eight");
        expect(stringifyNumber(2222)).toBe(
            "two thousand two hundred and twenty-two"
        );
    });

    it("should conver 5 digit numbers", () => {
        expect(stringifyNumber(17999)).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
        expect(stringifyNumber(20999)).toBe(
            "twenty thousand nine hundred and ninety-nine"
        );
        expect(stringifyNumber(24999)).toBe(
            "twenty-four thousand nine hundred and ninety-nine"
        );
        expect(stringifyNumber(17999)).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
    });

    it("should convert 6 digit numbers", () => {
        expect(stringifyNumber(123411)).toBe(
            "one hundred and twenty-three thousand four hundred and eleven"
        );
    });

    it("should convert numbers correctly", () => {
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

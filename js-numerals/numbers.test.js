const { stringifyNumber } = require("./utils/numbers");

describe("stringifyNumber", () => {
    it("should convert numbers correctly", () => {
        expect(stringifyNumber(1)).toBe("one");
        expect(stringifyNumber(23)).toBe("twenty-three");
        expect(stringifyNumber(81)).toBe("eighty-one");
        expect(stringifyNumber(20)).toBe("twenty");
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

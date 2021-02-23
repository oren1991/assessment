const { stringifyNumber } = require("./utils/numbers");

describe("stringifyNumber", () => {
    it("should convert numbers correctly", () => {
        expect(stringifyNumber(1)).toBe("one");
        //given tests
        expect(stringifyNumber(7).toBe("seven"));
        expect(stringifyNumber(42).toBe("forty-two"));
        expect(stringifyNumber(2001).toBe("two thousand and one"));
        expect(stringifyNumber(1999).toBe("nineteen hundred and ninety-nine"));
        expect(
            stringifyNumber(17999).toBe(
                "seventeen thousand nine hundred and ninety-nine"
            )
        );
    });
});

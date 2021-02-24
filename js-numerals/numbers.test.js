const { stringifyNumber } = require("./utils/numbers");
const { Number } = require("./utils/numbersClass");

describe("stringifyNumber", () => {
    it("should convert numbers correctly", () => {
        expect(stringifyNumber(1)).toBe("one");
        expect(stringifyNumber(23)).toBe("twenty-three");
        expect(stringifyNumber(81)).toBe("eighty-one");
        expect(stringifyNumber(20)).toBe("twenty");
        expect(stringifyNumber(221)).toBe("two hundred and twenty-one");
        expect(stringifyNumber(201)).toBe("two hundred and one");
        expect(stringifyNumber(200)).toBe("two hundred");
        expect(stringifyNumber(2000)).toBe("two thousand");
        expect(stringifyNumber(2222)).toBe(
            "two thousand two hundred and twenty-two"
        );
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

describe("Number class stringify", () => {
    it("should convert numbers correctly", () => {
        expect(new Number(1).stringify()).toBe("one");
        expect(new Number(23).stringify()).toBe("twenty-three");
        expect(new Number(81).stringify()).toBe("eighty-one");
        expect(new Number(20).stringify()).toBe("twenty");
        expect(new Number(221).stringify()).toBe("two hundred and twenty-one");
        expect(new Number(201).stringify()).toBe("two hundred and one");
        expect(new Number(200).stringify()).toBe("two hundred");
        expect(new Number(2000).stringify()).toBe("two thousand");
        expect(new Number(2222).stringify()).toBe(
            "two thousand two hundred and twenty-two"
        );
        //given tests
        expect(new Number(7).stringify()).toBe("seven");
        expect(new Number(42).stringify()).toBe("forty-two");
        expect(new Number(2001).stringify()).toBe("two thousand and one");
        expect(new Number(1999).stringify()).toBe(
            "nineteen hundred and ninety-nine"
        );
        expect(new Number(17999).stringify()).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
    });
});

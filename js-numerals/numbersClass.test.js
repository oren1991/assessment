const { Number } = require("./utils/numbersClass");
describe("Number class stringify", () => {
    it("should convert one digit numbers", () => {
        expect(new Number(0).stringify()).toBe("zero");
        expect(new Number(6).stringify()).toBe("six");
        expect(new Number(8).stringify()).toBe("eight");
        expect(new Number(2).stringify()).toBe("two");
        expect(new Number(4).stringify()).toBe("four");
    });

    it("should convert two digit numbers", () => {
        expect(new Number(23).stringify()).toBe("twenty-three");
        expect(new Number(81).stringify()).toBe("eighty-one");
        expect(new Number(20).stringify()).toBe("twenty");
        expect(new Number(56).stringify()).toBe("fifty-six");
    });

    it("should convert 3 digit numbers", () => {
        expect(new Number(221).stringify()).toBe("two hundred and twenty-one");
        expect(new Number(201).stringify()).toBe("two hundred and one");
        expect(new Number(200).stringify()).toBe("two hundred");
        expect(new Number(520).stringify()).toBe("five hundred and twenty");
        expect(new Number(753).stringify()).toBe(
            "seven hundred and fifty-three"
        );
        expect(new Number(100).stringify()).toBe("one hundred");
    });

    it("should convert 4 digit numbers", () => {
        expect(new Number(2000).stringify()).toBe("two thousand");
        expect(new Number(2010).stringify()).toBe("two thousand and ten");
        expect(new Number(2100).stringify()).toBe(
            "two thousand and one hundred"
        );
        expect(new Number(6179).stringify()).toBe(
            "six thousand one hundred and seventy-nine"
        );
        expect(new Number(1988).stringify()).toBe(
            "nineteen hundred and eighty-eight"
        );
        expect(new Number(2222).stringify()).toBe(
            "two thousand two hundred and twenty-two"
        );
    });

    it("should conver 5 figit numbers", () => {
        expect(new Number(17999).stringify()).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
        expect(new Number(20999).stringify()).toBe(
            "twenty thousand nine hundred and ninety-nine"
        );
        expect(new Number(24999).stringify()).toBe(
            "twenty-four thousand nine hundred and ninety-nine"
        );
        expect(new Number(17999).stringify()).toBe(
            "seventeen thousand nine hundred and ninety-nine"
        );
    });

    it("should convert 6 digit numbers", () => {
        expect(new Number(123411).stringify()).toBe(
            "one hundred and twenty-three thousand four hundred and eleven"
        );
    });

    it("should convert numbers correctly", () => {
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

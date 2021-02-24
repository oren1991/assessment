const { Number } = require("./utils/numbersClass");
describe("Number class stringify", () => {
    it("should convert numbers correctly", () => {
        //expect(new Number(0).stringify()).toBe("zero");
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
        expect(new Number(123456).stringify()).toBe(
            "one hundred and twenty-three thousand four hundred and fifty-six"
        );
        expect(new Number(1000000).stringify()).toBe("Number too big");
        expect(new Number("hello").stringify()).toBe("input must be a number");
        expect(new Number().stringify()).toBe("input must be a number");
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

module.exports.stringifyNumber = (number) => {
    const ones = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    const teens = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const tens = {
        1: "", //handle teens separately,
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let numberString = number.toString();
    let sepNeeded;
    let result = "";
    switch (numberString.length) {
        case 1:
            result = ones[number];
            break;
        case 2:
            if (numberString[0] == "1") {
                result = teens[number];
            } else {
                sepNeeded = numberString[1] !== "0";
                result = `${tens[numberString[0]]}${sepNeeded ? "-" : ""}${
                    ones[numberString[1]]
                }`;
            }

            break;
        case 3:
            twoDigitPart = parseInt(numberString.slice(1));
            let stringifiedPart = this.stringifyNumber(twoDigitPart);
            sepNeeded = stringifiedPart.length > 0;
            result = `${ones[numberString[0]]} hundred ${
                sepNeeded ? "and" : ""
            } ${stringifiedPart}`;
            break;
        case 4:
            let firstPart;
            let secondPart;
            let unit;
            if (numberString[0] == "1" && parseInt(numberString[1]) > 0) {
                unit = "hundred";
                let twoDigitHundred = parseInt(numberString.slice(0, 2));
                let twoDigitRest = parseInt(numberString.slice(2));
                firstPart = this.stringifyNumber(twoDigitHundred);
                secondPart = this.stringifyNumber(twoDigitRest);
            } else {
                unit = "thousand";
                let threeDigitPart = parseInt(numberString.slice(1));
                firstPart = ones[numberString[0]];
                secondPart = this.stringifyNumber(threeDigitPart);
            }
            sepNeeded = secondPart.length > 0 && !secondPart.includes("and");
            result = `${firstPart} ${unit} ${
                sepNeeded ? "and" : ""
            } ${secondPart}`;
    }
    return result.trim();
};

module.exports.stringifyNumber = (number) => {
    const ones = {
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
    switch (numberString.length) {
        case 1:
            return ones[number];
        case 2:
            return `${tens[numberString[0]]}-${ones[numberString[1]]}`;
    }

    return ones[number];
};

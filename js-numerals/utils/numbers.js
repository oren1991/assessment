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
            sepNeeded = numberString[1] !== "0";
            result = `${tens[numberString[0]]}${sepNeeded ? "-" : ""}${
                ones[numberString[1]]
            }`;
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
            if (numberString[0] == "1" && parseInt(numberString[1]) > 0) {
                //specialhandling TODO
            } else {
                let threeDigitPart = parseInt(numberString.slice(1));
                let stringifiedPart = this.stringifyNumber(threeDigitPart);
                console.log(stringifiedPart.length);
                sepNeeded =
                    stringifiedPart.length > 0 &&
                    !stringifiedPart.includes("and");
                console.log(stringifiedPart);
                result = `${ones[numberString[0]]} thousand ${
                    sepNeeded ? "and" : ""
                } ${stringifiedPart}`;
            }
    }
    return result.trim();
};

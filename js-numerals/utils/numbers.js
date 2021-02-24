const { ONES, TEENS, TENS } = require("./constants");
module.exports.stringifyNumber = (number) => {
    let numberString = number.toString();
    let sepNeeded;
    let result = "";
    let firstPart;
    let secondPart;
    let unit;
    switch (numberString.length) {
        case 1:
            return ONES[number];
        case 2:
            if (numberString[0] == "1") {
                result = TEENS[number];
            } else {
                sepNeeded = numberString[1] !== "0";
                result = `${TENS[numberString[0]]}${sepNeeded ? "-" : ""}${
                    ONES[numberString[1]]
                }`;
            }
            return result;
        case 3:
            firstPart = ONES[numberString[0]];
            secondPart = this.stringifyNumber(parseInt(numberString.slice(1)));
            sepNeeded = secondPart.length > 0;
            unit = "hundred";
            break;
        case 4:
            if (numberString[0] == "1" && parseInt(numberString[1]) > 0) {
                unit = "hundred";
                firstPart = this.stringifyNumber(
                    parseInt(numberString.slice(0, 2))
                );
                secondPart = this.stringifyNumber(
                    parseInt(numberString.slice(2))
                );
            } else {
                unit = "thousand";
                let threeDigitPart = parseInt(numberString.slice(1));
                firstPart = ONES[numberString[0]];
                secondPart = this.stringifyNumber(threeDigitPart);
            }
            sepNeeded = secondPart.length > 0 && !secondPart.includes("and");
            break;
        case 5:
            unit = "thousand";
            firstPart = this.stringifyNumber(
                parseInt(numberString.slice(0, 2))
            );
            secondPart = this.stringifyNumber(parseInt(numberString.slice(2)));
    }
    result = `${firstPart} ${unit}${sepNeeded ? " and" : ""} ${secondPart}`;
    return result.trim();
};

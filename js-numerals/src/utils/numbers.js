import { ONES, TEENS, TENS } from "./constants";
export const stringifyNumber = (number, recursive = false) => {
    if (typeof number !== "number" || isNaN(number))
        return "input must be a number";
    if (number == 0 && !recursive) return "zero";
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
            secondPart = stringifyNumber(parseInt(numberString.slice(1)), true);
            sepNeeded = secondPart.length > 0;
            unit = "hundred";
            break;
        case 4:
            if (numberString[0] == "1" && parseInt(numberString[1]) > 0) {
                unit = "hundred";
                firstPart = stringifyNumber(
                    parseInt(numberString.slice(0, 2)),
                    true
                );
                secondPart = stringifyNumber(
                    parseInt(numberString.slice(2)),
                    true
                );
            } else {
                unit = "thousand";
                let threeDigitPart = parseInt(numberString.slice(1));
                firstPart = ONES[numberString[0]];
                secondPart = stringifyNumber(threeDigitPart, true);
            }
            sepNeeded = secondPart.length > 0 && !secondPart.includes("and");
            break;
        case 5:
            unit = "thousand";
            firstPart = stringifyNumber(
                parseInt(numberString.slice(0, 2)),
                true
            );
            secondPart = stringifyNumber(parseInt(numberString.slice(2)), true);
            break;
        case 6:
            unit = "thousand";
            firstPart = stringifyNumber(
                parseInt(numberString.slice(0, 3)),
                true
            );
            secondPart = stringifyNumber(parseInt(numberString.slice(3)), true);
            break;
        default:
            return "Number is too big";
    }
    result = `${firstPart} ${unit}${sepNeeded ? " and" : ""} ${secondPart}`;
    return result.trim();
};

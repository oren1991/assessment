import { ONES, TEENS, TENS } from "./constants";
export class Number {
    constructor(number) {
        if (typeof number !== "number" || isNaN(number)) {
            this.number = null;
            return;
        }
        this.number = number;
    }

    stringify(number = this.number, recursive = false) {
        if (this.number == 0 && recursive == false) {
            return "zero";
        }
        if (this.number === null) {
            return "input must be a number";
        }
        if (this.number > 999999) {
            return "Number is too big";
        }
        let params = {};
        switch (number.toString().length) {
            case 1:
                return this.handleOneDigit(number);
            case 2:
                return this.handleTwoDigits(number);
            case 3:
                params = this.handleThreeDigits(number);
                break;
            case 4:
                params = this.handleFourDigits(number);
                break;
            case 5:
                params = this.handleFiveDigits(number);
                break;
            case 6:
                params = this.handleSixDigits(number);
        }
        return `${params.firstPart} ${params.unit}${
            params.sepNeeded ? " and" : ""
        } ${params.secondPart}`.trim();
    }

    handleOneDigit(number) {
        return ONES[number];
    }

    handleTwoDigits(number) {
        let numberString = number.toString();
        let result;
        if (numberString[0] == "1") {
            result = TEENS[number];
        } else {
            let sepNeeded = numberString[1] !== "0";
            result = `${TENS[numberString[0]]}${sepNeeded ? "-" : ""}${
                ONES[numberString[1]]
            }`;
        }
        return result;
    }

    handleThreeDigits(number) {
        let numberString = number.toString();
        let result = {};
        result.firstPart = ONES[numberString[0]];
        result.secondPart = this.stringify(
            parseInt(numberString.slice(1)),
            true
        );
        result.sepNeeded = result.secondPart.length > 0;
        result.unit = "hundred";
        return result;
    }

    handleFourDigits(number) {
        let numberString = number.toString();
        let result = {};
        if (numberString[0] == "1" && parseInt(numberString[1]) > 0) {
            result.unit = "hundred";
            result.firstPart = this.stringify(
                parseInt(numberString.slice(0, 2)),
                true
            );
            result.secondPart = this.stringify(
                parseInt(numberString.slice(2)),
                true
            );
        } else {
            result.unit = "thousand";
            let threeDigitPart = parseInt(numberString.slice(1));
            result.firstPart = ONES[numberString[0]];
            result.secondPart = this.stringify(threeDigitPart, true);
        }
        result.sepNeeded =
            result.secondPart.length > 0 && !result.secondPart.includes("and");
        return result;
    }

    handleFiveDigits(number) {
        let numberString = number.toString();
        let result = {};
        result.unit = "thousand";
        result.firstPart = this.stringify(
            parseInt(numberString.slice(0, 2)),
            true
        );
        result.secondPart = this.stringify(parseInt(numberString.slice(2)));
        return result;
    }

    handleSixDigits(number) {
        let numberString = number.toString();
        let result = {};
        result.unit = "thousand";
        result.firstPart = this.stringify(
            parseInt(numberString.slice(0, 3)),
            true
        );
        result.secondPart = this.stringify(
            parseInt(numberString.slice(3)),
            true
        );
        return result;
    }
}

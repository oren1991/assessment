# JavaScript/Front-end Developer - Exercise 1

## Instructions

-   Fork this project.
-   Write tests.
-   Don't use external libraries for the conversion.
-   Commit the important milestones and not just the final result.

## Exercise description

Create an application that contains a web form, which has a numeric input field and a submit button.

When the user gives an arabic number, the system shows the english phrase of that number.

For example:

<pre>
7    == seven
42   == forty-two
2001 == two thousand and one
1999 == nineteen hundred and ninety-nine
17999 == seventeen thousand nine hundred and ninety-nine
</pre>

That's all.

## Solution

I tried to capture the thought process I went through in the commits.
To test the solution run `npm test` in this folder. `npm install` is required before.

There was two approaches in my mind regarding the solution. Using only numbers and getting the correct digit positions by modulo operators, or convert the number to string and get the positions by the index of the digit.

I went with the string path because I expected it to be more readable and extendable too, but if performance was a huge factor to consider I probably would have taken the modulo approach.

Later in my solution I was thinking whether a class would be more suitable that's why I have two files and tests. I did not find much benefit of it over the simple function but I kept it. But choosing between the two would be a question of preference or the context where it would be used.

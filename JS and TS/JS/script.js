"use strict"
/* JS was initially created to "make web pages alive". The programms in this language are called scripts. 
First Name => LiveScript.
JS can execute in the browser, on the srever or on any device thar has a special program called the JS engine.
V-8 => in Chrome, Opera and Edge.

What makes JS unique?
1. Full integration with HTML/CSS.
2.Simple things are done simply.
3.Supported by all major browsers and enabled by default.

------------------- Script and its attributes --------------------------------

JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.

The <script> tag has a few attributes that are rarely used nowadays but can still be found in old code:
1.The type attribute: <script type=…>
2.The language attribute: <script language=…>

External scripts => If we have a lot of JavaScript code, we can put it into a separate file.
If src is set, the script content is ignored.
A single <script> tag can’t have both the src attribute and code inside.


----------------------------- Statements ---------------------------------------

Statements are syntax constructs and commands that perform actions. => alert.


----------------------------- use strict ---------------------------------------

In 2009, ECMAScript(ES5) added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".
Please make sure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

-------------------------------- variables -------------------------------------

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data. => let, const and var.

There are two limitations on variable names in JavaScript:
1.The name must contain only letters, digits, or the symbols $ and _.
2.The first character must not be a digit.

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.

To declare a constant (unchanging) variable, use const instead of let.

*/

//Task1    

let Admin;
let Name;
Name = "John";
Admin = Name;
// alert(Admin);

// //Task2 

let planetName = "Earth";
let currentUserName = "John";

// //Task3

// const birthday = '18.04.1982'; //make birthday uppercase => correct
// const age = someCode(birthday); //make age uppercase => wrong

//We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.In this code, birthday is exactly like that. So we could use the upper case for it.In contrast, age is evaluated in run-time. Today we have one age, a year after we’ll have another one. It is constant in a sense that it does not change through the code execution. But it is a bit “less of a constant” than birthday: it is calculated, so we should keep the lower case for it.

/* ------------------------- Data Types ---------------------------------------

1. String
2. Number
3. Boolean
4. BigInt
5. null
6. Undefined
7. Symbol (The symbol type is used to create unique identifiers for objects.)
8. Object (non-primitive=>used to store collections of data and more complex entities.)

Number
The number type represents both integer and floating point numbers.
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type: Infinity, -Infinity and NaN.
1.Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.We can get it as a result of division by zero Or just reference it directly.
2.NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation. So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

BigInt
In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
Just add n at the end of the number.
Right now, BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.

String
In JavaScript, there are 3 types of quotes.
1.Double quotes: "Hello".
2.Single quotes: 'Hello'.
3.Backticks: `Hello`. Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}.

Boolean
The boolean type has only two values: true and false.

null
A special value which represents “nothing”, “empty” or “value unknown”.

undefined
The meaning of undefined is “value is not assigned”.
If a variable is declared, but not assigned, then its value is undefined.

-------------------------- The typeof operator ---------------------------------

The typeof operator allows us to see which type is stored in a variable.
Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/

//Task

let name = "Ilya";

alert( `hello ${1}` ); //hello 1 => correct
alert( `hello ${"name"}` ); //hello name => correct
alert( `hello ${name}` ); //hello Ilya=> correct

/* ------------------- Interaction: alert, prompt, confirm ---------------------

alert
The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

prompt
The function prompt accepts two arguments:
result = prompt(title, [default]); => default An optional second parameter, the initial value for the input field.

confirm
The function confirm shows a modal window with a question and two buttons: OK and Cancel.

result = confirm(question);
*/

//Task

let userName = prompt('What is your name?');
alert(userName);


/* --------------------------- Type Conversions --------------------------------

The three most widely used type conversions are to string, to number, and to boolean.
.String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

.Numeric Conversion – Occurs in math operations. Can be performed with Number(value).
The conversion follows the rules:
Value / Becomes…
undefined /	NaN
null /	0
true / false  /	 1 / 0
string	/ The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.

.Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).
 

--------------------------- Basic Operators ------------------------------------

An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand.
An operator is binary if it has two operands.

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.

The operators ++ and -- can be placed either before or after a variable.

When the operator goes after the variable, it is in “postfix form”: counter++.
The “prefix form” is when the operator goes before the variable: ++counter. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

Bitwise Operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
AND ( & )
OR ( | )
*/

//Task1

// let a = 1,
//   b = 1;
// let c = ++a; // 2 => correct
// let d = b++; // 1 => correct

// //Task2

// let z = 2;
// let x = 1 + (z *= 2); // 5 => correct

// //Task3

// "" + 1 + 0; // "10" correct
// "" - 1 + 0; // 1 wrong => -1
// true + false; // 1 correct
// 6 / "3"; // 2 correct
// "2" * "3"; // "6" wrong => 6
// 4 + 5 + "px"; // "9px" correct
// "$" + 4 + 5; // "$45" correct
// "4" - 2; // 2 correct
// "4px" - 2; // NaN correct
// "  -9  " + 5; // " -9 5" correct
// "  -9  " - 5; // -14 correct
// null + 1; // 1 correct
// undefined + 1; // NaN correct
// " \t \n" - 2; // -2 correct

//Task4 Fix the addition (result should be 3)

// let e = prompt("First number?", 1);
// let f = prompt("Second number?", 2);

// alert(e + f); // 12

// let e = prompt("First number?", 1);
// let f = prompt("Second number?", 2);

// alert(+e + +f); // 3 correct

/* Comparison operators

Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

*/

//Task

// 5 > 4; // true correct
// "apple" > "pineapple"; // false correct
// "2" > "12"; // false wrong, dictionary comparison, first char "2" is greater than the first char "1".
// undefined == null; // true correct
// undefined === null; // false correct
// null == "\n0\n"; // false correct
// null === +"\n0\n"; // false correct

/* Conditinal branching

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.
*/

//Task1 Will alert be shown?

// if ("0") {
//   alert("Hello");
// } // yes correct

//Task2 Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’ If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// let nameOfJS = prompt("What is the official name of JS?");
// if (nameOfJS == "ECMAScript") {
//   alert("Right!");
// } else {
//   alert("You don’t know? ECMAScript!");
// } // correct

//Task3 Using if..else, write the code which gets a number via prompt and then shows in alert: 1, if the value is greater than zero, -1, if less than zero, 0, if equals zero.

// let number = prompt("Type a number!");
// if (number > 0) {
//   alert("1");
// } else if (number < 0) {
//   alert("-1");
// } else {
//   alert("0");
// } // correct

//Task4

// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = a + b < 4 ? "Below" : "Over"; // correct

//Task5

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message =
//   login == "Employee"
//     ? "Hello"
//     : login == "Director"
//     ? "Greetings"
//     : login == ""
//     ? "No login"
//     : ""; // correct

/* Logical operators

There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).
The OR || operator does the following:
Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.

The AND && operator does the following:
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

The precedence of AND && operator is higher than OR ||.
So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).

The operator (!) accepts a single argument and does the following:
Converts the operand to boolean type: true/false.
Returns the inverse value.
The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

A double NOT !! is sometimes used for converting a value to boolean type => same with Boolean(null)
*/

//Task1

// alert(null || 2 || undefined); // 2 correct

//Task2

// alert(alert(1) || 2 || alert(3)); // alert(1) then 2 correct, alert after showing message return undefined, so it goes on to the second operand searching for a truthy value.

// //Task3

// alert(1 && null && 2); // null correct

// //Task4

// alert(alert(1) && alert(2)); // alert(1) then undefined correct

//Task5

// alert(null || (2 && 3) || 4); // 3 correct

// //Task6

// if (age >= 14 && age <= 90) {
// } // correct

// //Task7

// if (!(age >= 14 && age <= 90)) {
// }
// if (age < 14 || age > 90) {
// }

//Task8

// if (-1 || 0) alert("first"); // will execute -1 correct
// if (-1 && 0) alert("second"); // will not execute 0 correct
// if (null || (-1 && 1)) alert("third"); // will execute 1 correct

//Task9

// let currentUser = prompt('Who is there?');
// if (currentUser == '') {
//     alert('Canceled');
// } else if(currentUser == 'Admin') {
//     let userPassword = prompt('Password?');
//     (userPassword == '') ? alert('Canceled') :
//     (userPassword == 'TheMaster') ? alert('Welcome!') :
//     alert('Wrong password')
// }else{
//     alert('I do not know you')
// } // correct

/* Nullish coalescing operator '??'

?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
Just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.
It’s forbidden to use it with || or && without explicit parentheses. 

Loops: while and for

While loop
A single execution of the loop body is called an iteration.
while (condition) {
  // code
  // so-called "loop body"
}

"do ... while loop"
do {
  // loop body
} while (condition);
The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

for loop
for (begin; condition; step) {
  // ... loop body ...
}

breaking the loop
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

continue
The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
*/

// //Task1
// let i = 3;

// while (i) {
//   alert( i-- );
// } // last value is 0 wrong it is 1

// //Task2
// let k = 0;
// while (++k < 5) alert( k ); // 4 correct

// let l = 0;
// while (l++ < 5) alert( l ); // 3 wrong it is 5

// //Task3
// for (let i = 0; i < 5; i++) alert( i ); // 5 correct

// for (let i = 0; i < 5; ++i) alert( i ); // 5 correct

//Task4
for (let index = 2; index <= 10; index++) {
   if (index % 2 == 0) {
    alert(index)
   }
} // correct

//Task5
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

let i = 0
while(i < 3){
alert(`number ${i}!`);
i++;
} // correct

//Task5
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);








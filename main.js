// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
	const currentDate = new Date();

	document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.

toString();

console.log("typeof toString()", typeof toString());

// Write a JavaScript program to convert a string to the number.

parseInt();
console.log("typeof parseInt()", typeof parseInt());

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

const myBool = false;
const myNull = null;
const myUndefined = undefined;
const myNumber = 42;
const myNaN = NaN;
const myString = "42";

// function declaration
const isTypeOf = (data) => {
	// return console.log(typeof data);

	if (data === myBool) {
		document.getElementById("type1").outerHTML =
			typeof data + " is the data type for <u>False</u>";
	}
	if (data === myNull) {
		document.getElementById("type2").outerHTML =
			typeof data + " is the data type for <u>Null</>";
	}
	if (data === myUndefined) {
		document.getElementById("type3").outerHTML =
			typeof data + " is the data type for <u>Undefined</u>";
	}
	if (data === myNumber) {
		document.getElementById("type4").outerHTML =
			typeof data + " is the type of data for <u>42</u>";
	}
	// cannot set NaN as a variable. have to use isNaN and then sent the parameter of data to return a truthy or falsey value.
	if (Number.isNaN(data)) {
		document.getElementById("type5").outerHTML =
			"number is the data type for <u>NaN</u>";
	}
	if (data === myString) {
		document.getElementById("type6").outerHTML =
			typeof data + " is the type of data for <u>'42'</u>";
	}
};

// function invocation
// isTypeOf(myBool); // should evaluate to boolean
// isTypeOf(myNull); // should evaluate to object
// isTypeOf(myUndefined); // should evauluate to undefined
// isTypeOf(myNumber); // should evaluate to number
// isTypeOf(myNaN); // should evaluate to number
// isTypeOf(myString); // should evaluate to string

// Write a JavaScript program that adds 2 numbers together.

const addTwo = () => {
	const g = document.getElementById("num1").value;
	const h = document.getElementById("num2").value;

	const result = parseInt(g) + parseInt(h);
	document.getElementById("answer").innerHTML = `Equals  ${result}`;
};

// Write a JavaScript program that runs only when 2 things are true.

const bothAreTrue = (num3, num4, num5, num6) => {
	// debugger;
	if (parseInt(num3) === parseInt(num4) && parseInt(num5) === parseInt(num6)) {
		document.getElementById("answer2").innerHTML = "Both are TRUE";
	} else {
		document.getElementById("answer2").innerHTML = "One is NOT true";
	}
};

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneIsTrue = (num6, num7, num8, num9) => {
	if (num6 > num7 || num8 !== num9) {
		document.getElementById("answer3").innerHTML = "One of these are true";
	} else {
		document.getElementById("answer3").innerHTML =
			"Either both are true or false";
	}
};

// Write a JavaScript program that runs when both things are not true.

const bothAreFalse = (num10, num11, num12, num13) => {
	// debugger;
	if (
		parseInt(num10) === parseInt(num11) &&
		parseInt(num12) === parseInt(num13)
	) {
		document.getElementById("answer5").innerHTML = "Both are FALSE";
	} else {
		document.getElementById("answer5").innerHTML = "One is NOT false";
	}
};

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

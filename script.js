//Basic Math Operations
const add = (a,b) => {
	const x = a+b;
	return x;
}

const subtract = (a,b) => {
	const x = a-b;
	return x;
}

const multiply = (a,b) => {
	const x = a*b;
	return x;
}

const divide = (a,b) => {
	const x = a/b;
	return x;
}

//Use one of the previous functions and 2 values and returns the result.
const operate = (operation, a, b) => {
	return operation(a,b);
}

//updateDisplay()
const display = document.querySelector('#display');
const updateDisplay = (value) => {
	display.append(value);
}

//updateDisplayTop()
const displayTop = document.querySelector('#display-top');
const updateDisplayTop = () => {
	displayTop.append(display.textContent);
	display.textContent.remove();
}

//Store the last two number.
const saveNumbers = [0,0];
let firstVariable = 0;
let secondVariable = 0;


//function for the number-buttons.
const numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		const buttonValueString = button.textContent;
		const buttonValueNumber = Number(buttonValueString);

		updateDisplay(buttonValueNumber);
		saveNumbers.unshift(buttonValueNumber);
		saveNumbers.pop();
	})
})

//function for math operators
const addButton = document.querySelector('#btn-add');
addButton.addEventListener('click', () => {
	firstVariable = Number(display.textContent);
	updateDisplay(' + ');
});

const equalButton = document.querySelector('#btn-equal');
equalButton.addEventListener('click', () => {

})

/*
1 capture the value on display
2 append the operator symbol on the display
3 accepts the sencond number.


const res = add(saveNumbers[0], saveNumbers[1]);
	console.log(res);

*/
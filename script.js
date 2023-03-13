//Basic Math Operations
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

//Use one of the previous functions and 2 values and returns the result.
const operate = (operation, a, b) => {
	return operation(a,b);
}

//updateDisplay()
const display = document.querySelector('#display');
const updateDisplay = (value) => {
	display.append(value);
}

//cleanDisplay()
const cleanDisplay = () => {
	while (display.firstChild) {
		display.removeChild(display.firstChild);
	}
}

//cleanDisplayTop()
const displayTop = document.querySelector('#display-top');
const cleanDisplayTop = () => {
	while (displayTop.firstChild) {
		displayTop.removeChild(displayTop.firstChild);
	}
}

//updateDisplayTop()
const updateDisplayTop = () => {
	displayTop.append(display.textContent);
	cleanDisplay();
}

//Store the last two number.
const saveNumbers = [0,0];
let firstVariable = 0;
let secondVariable = 0;
let operationType;


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
///Add
const addButton = document.querySelector('#btn-add');
addButton.addEventListener('click', () => {
	firstVariable = Number(display.textContent);
	updateDisplay(' + ');
	updateDisplayTop();
	cleanDisplay();
	operationType = add;
});

///Subtract
const subtractButton = document.querySelector('#btn-subtract');
subtractButton.addEventListener('click', () => {
	firstVariable = Number(display.textContent);
	updateDisplay(' - ');
	updateDisplayTop();
	cleanDisplay();
	operationType = subtract;
});

///Multiply
const multiplyButton = document.querySelector('#btn-multiply');
multiplyButton.addEventListener('click', () => {
	firstVariable = Number(display.textContent);
	updateDisplay(' * ');
	updateDisplayTop();
	cleanDisplay();
	operationType = multiply;
});

///Divide
const divideButton = document.querySelector('#btn-divide');
divideButton.addEventListener('click', () => {
	firstVariable = Number(display.textContent);
	updateDisplay(' / ');
	updateDisplayTop();
	cleanDisplay();
	operationType = divide;
});


const equalButton = document.querySelector('#btn-equal');
equalButton.addEventListener('click', () => {
	secondVariable = Number(display.textContent);
	updateDisplayTop(display.textContent);
	cleanDisplay();
	const result = operate(operationType, firstVariable, secondVariable);
	display.append('= '+result);
	
})


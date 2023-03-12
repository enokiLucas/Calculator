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
const updateDisplay = (value) => {
	
}

//buttons
const numberButtons = document.querySelectorAll('.button-number');
numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		const buttonValue = button.textContent;
		updateDisplay(buttonValue);
	})
})
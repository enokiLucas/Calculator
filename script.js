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

/*
//Testing the previous functions.
console.log(add(3,2));
console.log(subtract(3,20));
console.log(multiply(3,2));
console.log(divide(3,2));
*/


const operate = (operation, a, b) => {
	return operation(a,b);
}

console.log(operate(add, 2, 3));
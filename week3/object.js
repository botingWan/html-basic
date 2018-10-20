const friend1 = {
	// friend1 has serveral properties with value inside
	// Forming key-value pair
	// Each key is unique in an object
	nickName: 'Au',
	firstName: 'Donald',
	lastName: 'Au',
	gender: 'M',
	age: 25,
	hobbies: [
		'earning money', 'eat', 'poop', 'travel'
	],
}

// We retrive the value of property by {{object}}.{{field}} syntax
console.log(`${friend1.nickName} 's full name is ${friend1.lastName}  ${friend1.firstName}`);

// Object is iterable with for ... in syntax

for (key in friend1) {
	// key is a new variable created for each iteration with a string value represents the key
	console.log(`${key}: ${friend1[key]}`);
}


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// A function ends when the error is thrown
// try replacing friend1.details.birthdate with a valid value
// See if the function call continues
console.log(friend1.details.birthdate);
console.log(6);
console.log(7);
console.log(8);

// Data type in JS

// primitive data type
// string
// number
// boolean
// undefined

// complex data type
// object
// array
// function
// typeof null === 'object'

console.log(typeof 10);
console.log(typeof '10');
console.log(typeof true);
console.log(typeof friend1);
console.log(typeof friend1.hobbies);
console.log(typeof null);


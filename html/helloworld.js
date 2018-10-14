// const strandA = 'GACTAGCTGACTAGCT';
// const strandB = 'AACCAGCT';
// // argument = input
// // function = factory
// // argument = raw material
// // // output = product
// function checkingHammingDistance(inputA, inputB) {
// 	let distance = 0;
// 	const lengthOfStrandA = inputA.length;
// 	const lengthOfStrandB = inputB.length;
// 	if (lengthOfStrandA !== lengthOfStrandB) {
// 		// return 'cant be compared';
// 	}
// 	return distance;
// }

// console.log(checkingHammingDistance(strandA, strandB));

// // 	console.log(lengthOfStrandA);
// // 	console.log(lengthOfStrandB);

// 	for (let i=0; i<lengthOfStrandA; i++) {
// 		const charAtA = inputA[i];
// 		const charAtB = inputB[i];
// 		if (charAtA !== charAtB) {
// 			distance++;
// 		}
// 	}

// 	return distance;
// }

// const output = checkingHammingDistance(strandA, strandB);
// console.log('Output of boting\'s 1st func is,',  checkingHammingDistance(strandA, strandB));

// Please define a function which receive a number input
// minus it with 2, until it <= 0
// then return the number of minus

function geniusCalculator(x, frequency=0) {
	// return Math.ceil(x/2);
	// let frequency = 0;
	// while(x > 0) {
	// 	x = x - 2;
	// 	frequency++;
	// }
	// return frequency;
	if (x <= 0) {
		return frequency;
	}

	x = x - 2;
	frequency++;
	return geniusCalculator(x, frequency);
}
console.log(geniusCalculator(100000000))
// x become 2, frequency become 1
// geniusCalulator(2, 1)
// x become 0, frequency become 2
// geniysCalutator(0, 2)
// return frequency

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// My Solution
var moveZeros = function(arr) {
	arr.forEach(function(item) {
		if (item === 0) {
			arr.push(item);
			arr.splice(arr.indexOf(item), 1);
		}
	});
	return arr;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// returns[false,1,1,2,1,3,"a",0,0]

// Voted Best Practice
var moveZeros = function(arr) {
	return arr
		.filter(function(x) {
			return x !== 0;
		})
		.concat(
			arr.filter(function(x) {
				return x === 0;
			})
		);
};

// I like this one however
var moveZeros = function(arr) {
	var filtedList = arr.filter(function(num) {
		return num !== 0;
	});
	var zeroList = arr.filter(function(num) {
		return num === 0;
	});
	return filtedList.concat(zeroList);
};

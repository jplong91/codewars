// Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// My Solution
function descendingOrder(n) {
	let stringN = n.toString().split("");
	let finalS = stringN
		.sort(function(a, b) {
			return b - a;
		})
		.join("");
	return parseInt(finalS);
}

// Should return 54221
console.log(descendingOrder(21452));

// Voted Best Practice
function descendingOrder(n) {
	return parseInt(
		String(n)
			.split("")
			.sort()
			.reverse()
			.join("")
	);
}

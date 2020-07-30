function deepSum(arr) {
	var sum = 0;
	for (var i in arr) {
		if (typeof arr[i] == "object") sum += deepSum(arr[i]);
		else sum += arr[i];
	}
	if (sum == 0) {
		return "No Number";
	} else {
		return sum;
	}
}

console.log(
	deepSum([
		[
			[4, 5, 6],
			[9, 1, 2, 10],
			[9, 4, 3],
		],
		[
			[4, 14, 31],
			[9, 10, 18, 12, 20],
			[1, 4, 90],
		],
		[
			[2, 5, 10],
			[3, 4, 5],
			[2, 4, 5, 10],
		],
	])
);

console.log(
	deepSum([
		[[20, 10], [15], [1, 1]],
		[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
		[[3, 5, 1], [1, 5, 3], [5]],
		[[2]],
	])
);

console.log(deepSum([]));

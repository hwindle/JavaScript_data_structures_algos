const find_sum_better = (arr, weight) => {
	let hash_table = {};
	const length = arr.length;	

	for (var i = 0; i < length; i++) {
		let currentElement = arr[i];
		let difference = weight - currentElement;
		console.log('Difference: ' + difference);
		if (hash_table[currentElement] != undefined) {
			return [i, hash_table[weight - currentElement]];
		} else {
			// store index
			hash_table[difference] = i;
		}
	}
	return -1;
}

console.log(find_sum_better([1,2,3,4,5], 9));

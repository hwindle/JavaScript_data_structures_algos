function binary_search(array, n) {
	let low_index = 0;
	let high_index = array.length - 1;

	while (low_index <= high_index) {
		let mid_index = Math.floor((high_index + low_index) / 2);
		if (array[mid_index] == n) {
			return mid_index;
		} else if (n > array[mid_index]) {
			low_index = mid_index;
		} else {
			high_index = mid_index;
		}
	} // end while

	return -1;
}

console.log(binary_search([1, 2, 3, 4], 4));
console.log(binary_search([1, 2, 3, 4], 5));

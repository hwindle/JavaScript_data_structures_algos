// works best with unsorted arrays
function linear_search(array, n) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] == n) {
			return true;
		}
	}
	return false;
}

console.log(linear_search([1, 2, 3, 4, 5, 7, 8, 9], 6));


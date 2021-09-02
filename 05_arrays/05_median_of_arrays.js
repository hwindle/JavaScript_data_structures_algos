const median_of_array = array => {
	const length = array.length;
	// Odd array
	if (length % 2 == 1) {
		return array[Math.floor(length / 2)];
	} else {
		// even
		return (array[length / 2] + array[length / 2 - 1]) / 2; 
	}
};

// array2 is the bigger array
const median_of_two_sorted_arrays = (array1, array2, pos) => {
	if (pos <= 0) return -1;
	if (pos == 1) return (array1[0] + array2[0]) / 2;

	if (pos == 2) {
		return (Math.max(array1[0], array2[0]) + 
			Math.min(array1[1], array2[1])) / 2;
	}

	let median1 = median_of_array(array1);
	let median2 = median_of_array(array2);

	if (median1 == median2) return median1;

	let even_offset = pos % 2 == 0 ? 1 : 0;
	let offset_minus = Math.floor(pos / 2) - even_offset;
	let offset_plus = Math.floor(pos / 2) + even_offset;

	if (median1 < median2) {
		return median_of_two_sorted_arrays(array1.slice(offset_minus), 
			array2.slice(offset_minus), offset_plus);
	} else {
		return median_of_two_sorted_arrays(array2.slice(offset_minus),
			array1.slice(offset_minus), offset_plus);
	}
};

let one = median_of_two_sorted_arrays([1, 2, 3], [4, 5, 6], 3);
let two = median_of_two_sorted_arrays([11, 23, 24], [32, 33, 450], 3);
let three = median_of_two_sorted_arrays([1, 2, 3], [2, 3, 5], 3);

console.log(one);
console.log(two);
console.log(three);

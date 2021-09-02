function new_slice(array, begin_index, end_index) {
	// no parameters, return the array
	if (!begin_index && !end_index) return array;

	// no end_index = end_index is the max array length
	if (!end_index || end_index > array.length) {
		end_index = array.length;
	}
	
	let part_array = [];
	// If both beginning and end specified return the array part
	for (let i = begin_index; i < end_index; i++) {
		part_array.push(array[i]);
	} // end for

	return part_array;
}

console.log(new_slice(['cow', 2, {'chickens': 12}, 'pig', 3, 4], 1, 4));

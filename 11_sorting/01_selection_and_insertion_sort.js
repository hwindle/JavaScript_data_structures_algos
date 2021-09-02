function swap(array, index1, index2) {
	let temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function selection_sort(items) {
	const len = items.length;
	let min = 0;
	for (let i = 0; i < len; i++) {
		min = i;
		// check the rest of the array to see if anything is smaller
		for (let j = i + 1; j < len; j++) {
			if (items[j] < items[min]) {
				min = j;
			}
		} // inner loop
		// if the minimum num isn't in position, swap it.
		if (i != min) {
			swap(items, i, min);
		}
	} // outer for

	return items;
}

console.log('Selection sort: ' + selection_sort([6, 1, 23, 4, 2, 3]));

function insertion_sort(items) {
	const len = items.length;
	let value = 0; // value currently being compared
	let unsorted_i = 0; // index into unsorted section
	let sorted_i = 0; // index into sorted section

	for (unsorted_i = 0; unsorted_i < len; unsorted_i++) {
		// store current value because it may shift later
		value = items[unsorted_i];
		/*
			Whenever the value in the sorted section is > the value
			in the unsorted section, shift all items in the sorted
			section over by one. This creates space in which to insert
			the value.
		*/
		for (sorted_i = unsorted_i - 1; 
			sorted_i > -1 && items[sorted_i] > value; sorted_i--) {
			items[sorted_i + 1] = items[sorted_i];
		} // inner loop
		items[sorted_i + 1] = value;
	} // outer loop
	
	return items;
}

console.log('Insertion sort: ' + insertion_sort([8, 1, 24, 28, 9, 3]));


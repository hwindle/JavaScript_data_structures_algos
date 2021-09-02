function swap(str_arr, index1, index2) {
	var temp = str_arr[index1];
	str_arr[index1] = str_arr[index2];
	str_arr[index2] = temp;
}

function permute(str_arr, begin, end) {
	if (begin == end) {
		console.log(str_arr);
	} else {
		for (var i = begin; i < end + 1; i++) {
			swap(str_arr, begin, i);
			permute(str_arr, begin + 1, end);
			swap(str_arr, begin, i);
		} // end for 
	}
}

function permute_array(str_arr) {
	permute(str_arr, 0, str_arr.length - 1);
}

permute_array(['A', 'B', 'C', 'D']);


function unique_list(arr1, arr2) {
	let result_set = new Set(arr1.concat(arr2));
	return Array.from(result_set);
}

const one = unique_list([1, 1, 2, 2], [2, 3, 4, 5]);
const two = unique_list(['geese', 'swans', 'ducks'], ['geese', 'swans', 'swans', 'turkeys']);

console.log(one);
console.log(two);

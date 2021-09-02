function diff(a, b) {
	let diff_set = new Set(a);
	for (var elem of b) {
		diff_set.delete(elem);
	}
	return diff_set;
}

let a = new Set([1, 2, 3, 4]),
		b = new Set([2, 3]);

console.log(diff(a, b));

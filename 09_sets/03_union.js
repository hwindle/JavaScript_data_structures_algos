function union_set(a, b) {
	let union = new Set(a);
	for (var elem of b) {
		union.add(elem);
	}
	return union;
}

let a = new Set([1, 2, 3, 4]), 
		b = new Set([2, 3]),
		c = new Set([5, 6]);

console.log(union_set(a, b));
console.log(union_set(a, c));


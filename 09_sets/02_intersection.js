function intersect_sets(a, b) {
	let intersection = new Set();

	for (var elem of b) {
		if (a.has(elem)) {
			intersection.add(elem);
		}
	}
	return intersection;
}

const a = new Set([6, 7, 8, 9, 10]);
const b = new Set([6, 7]);
console.log(intersect_sets(a, b));


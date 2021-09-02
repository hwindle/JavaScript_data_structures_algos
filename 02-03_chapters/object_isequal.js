function is_equivalent(a, b) {
	// array of property names
	let a_props = Object.getOwnPropertyNames(a);
	let b_props = Object.getOwnPropertyNames(b);

	// if the property lengths are different, they're not the same
	if (a_props.length != b_props.length) {
		return false;
	}

	for (let i = 0; i < a_props.length; i++) {
		let prop_name = a_props[i];
		// if the value for each prop. isn't the same...
		if (a[prop_name] !== b[prop_name]) {
			return false;
		}
	}

	// everything has matched in the objects.
	return true;
}

console.log(is_equivalent({'turkey': 34}, {'turkey': 34}));

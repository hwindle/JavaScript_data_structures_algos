function mod_exp(base, exponent, modulus) {
	if (modulus == 1) return 0;
	let value = 1;
	for (let i = 0; i < exponent; i++) {
		value = (value * base) % modulus;
	}
	return value;
	// O(exponent) linear time complexity
}

console.log(mod_exp(4, 3, 5));

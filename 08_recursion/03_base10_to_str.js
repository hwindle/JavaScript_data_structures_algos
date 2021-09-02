function base_10_to_string(n) {
	var binary_string = '';

	function base_10_helper(n) {
		if (n < 2) {
			binary_string += n;
			return;
		} else {
			base_10_helper(Math.floor(n / 2));
			base_10_helper(n % 2);
		}
	}
	base_10_helper(n);

	return binary_string;
}

console.log(base_10_to_string(232)); 
console.log(base_10_to_string(100));

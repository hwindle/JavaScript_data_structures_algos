
function getNthFibo(n, last_last, last) {
	if (n == 0) return last_last;
	if (n == 1) return last;
	
	return getNthFibo(n - 1, last, last_last + last);
}

console.log(getNthFibo(38, 27, 3));

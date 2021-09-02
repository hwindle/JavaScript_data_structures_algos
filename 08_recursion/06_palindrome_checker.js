function is_palindrome_recursive(word) {
	return is_palindrome(word, 0, word.length - 1);
}

function is_palindrome(word, begin_pos, end_pos) {
	if (begin_pos >= end_pos) return true;

	if (word.charAt(begin_pos) != word.charAt(end_pos)) {
		return false;
	} else {
		return is_palindrome(word, begin_pos + 1, end_pos - 1);
	}
}

console.log(is_palindrome_recursive('hi'));
console.log(is_palindrome_recursive('iii'));
console.log(is_palindrome_recursive('ii'));
console.log(is_palindrome_recursive('aibohphobia'));
console.log(is_palindrome_recursive('racecar'));

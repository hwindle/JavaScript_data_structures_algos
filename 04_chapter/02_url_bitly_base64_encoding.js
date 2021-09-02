const DICTIONARY = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345678980'.split('');

const encodeId = num => {
	const base = DICTIONARY.length;
	let encoded = '';
	if (num === 0) {
		return DICTIONARY[0];
	}

	while (num > 0) {
		encoded += DICTIONARY[(num % base)];
		num = Math.floor(num / base);
	}	
	return reverseWord(encoded);
};

const reverseWord = str => {
	let reversed = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str.charAt(i);
	}
	return reversed;
}

const decodeId = id => {
	const base = DICTIONARY.length;
	let decoded = 0;
	for (let index = 0; index < id.split('').length; index++) {
		decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
	}
	return decoded;
}

console.log(encodeId(11231230));
console.log(decodeId('VhU2'));


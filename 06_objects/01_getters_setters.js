function Example_Class(name, size) {
	let private_name = name;
	let private_size = size;

	this.get_name = function() { return private_name; }
	this.set_name = function(name) { private_name = name; }

	this.get_size = function() { return private_size; }
	this.set_size = function(size) { private_size = size; }
}

let example = new Example_Class('Marie', 4);
example.set_size(12);

console.log(example.get_name());
console.log(example.get_size());

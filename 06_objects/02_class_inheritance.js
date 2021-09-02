function Animal(name, animal_type) {
	this.name = name;
	this.animal_type = animal_type;
}

Animal.prototype.say_name = function() {
	console.log(this.name);
}

Animal.prototype.say_animal = function() {
	console.log(this.animal_type);
}

function Swan(name) {
	Animal.call(this, name, 'Swan');
}

// copy over the methods
Swan.prototype = Object.create(Animal.prototype);
let squirrel = new Animal('Nutkin', 'Squirrel');
squirrel.say_name();
squirrel.say_animal();

let white_one = new Swan('Percy', 'Swan');
white_one.say_name();
white_one.say_animal();

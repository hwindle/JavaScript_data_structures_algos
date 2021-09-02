function flatten_dict(dict) {
	var flattened_dict = {};

	function flatten_dictionary_helper(dict, prop_name) {
		if (typeof dict != 'object') {
			flattened_dict[prop_name] = dict;
			return;
		}
		for (var prop in dict) {
			if (prop_name == '') {
				flatten_dictionary_helper(dict[prop], prop_name + prop);
			} else {
				flatten_dictionary_helper(dict[prop], prop_name + '.' + prop);
				// above is concatenating the other prop name like prop1.prop2.
			}
		}
	}

	flatten_dictionary_helper(dict, '');
	return flattened_dict;
}

var input = {
	'bananas': '1',
	'apples': {
		'bramble': '2',
		'Cox': '5',
		'granny smith': {
			'green': '3',
			'yellow': '1'
		}
	}
};

let output = flatten_dict(input);
console.log(output);

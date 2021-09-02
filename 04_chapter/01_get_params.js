const uri = 'https://example.com/product.php?category=4&product_id=21&query=yarn';
let queryString = {};
uri.replace(
	new RegExp('([^?=&]+)(=([^&*]))?', 'g'),
	function ($0, $1, $2) { queryString[$1] = $2;  }
);

console.log('ID: ' + queryString['product_id']);
console.log('Category: ' + queryString['category']);
console.log('Search term: ' + queryString['query']);

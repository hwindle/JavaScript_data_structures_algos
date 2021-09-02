let array1 = ['pigs', 'ducks', 'geese', 'baby moorhens', 'baby coots'];

array1.forEach(element => {
	console.log(element);
});

array1.forEach((element, index) => {
	console.log('Index: ' + index + array1[index]);
});

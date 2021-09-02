function pascal_triangle(row, col) {
	if (col == 0) {
		 return 1;
	} else if (row == 0) {
		return 0;
	} else {
		return pascal_triangle(row - 1, col) + pascal_triangle(row - 1, col - 1);
	}	
}

console.log(pascal_triangle(10, 3));

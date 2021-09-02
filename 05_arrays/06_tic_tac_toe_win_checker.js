const check_row = (row_arr, letter) => {
	for (let i = 0; i < 3; i++) {
		if (row_arr[i] !=  letter) return false;
	}
	return true;
}

const check_column = (game_board_m, col_index, letter) => {
	for (let i = 0; i < 3; i++) {
		if (game_board_m[i][col_index] != letter) return false;
	}
	return true;
}

const tic_tac_toe_winner = (game_board_m, letter) => {
	// check rows
	const row_win = check_row(game_board_m[0], letter) 
			|| check_row(game_board_m[1], letter) 
			|| check_row(game_board_m[2], letter);

	const col_win = check_column(game_board_m, 0, letter)
			|| check_column(game_board_m, 1, letter)
			|| check_column(game_board_m, 2, letter);

	const diagonal_left_to_right = (game_board_m[0][0] == letter 
		&& game_board_m[1][1] == letter && game_board_m[2][2] == letter);
	const diagonal_right_to_left = (game_board_m[0][2] == letter
		&& game_board_m[1][1] == letter && game_board_m[2][0] == letter);

	return row_win || col_win || diagonal_left_to_right 
		|| diagonal_right_to_left;
}

// letter O not the number 0 (zero)
let board = [
	['O', '-', 'X'],
	['-', 'O', '-'],
	['-', 'X', 'O']
];

console.log(tic_tac_toe_winner(board, 'X'));
console.log(tic_tac_toe_winner(board, 'O'));

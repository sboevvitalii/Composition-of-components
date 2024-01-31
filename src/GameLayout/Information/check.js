import { WIN_PATTERNS } from "../Field/WinsArray";

export const isDraw = (board) => board.every((cell) => cell);

export const isWinner = (board, currentPlayer) => {
	return WIN_PATTERNS.some((pattern) =>
		pattern.every((element) => board[element] === currentPlayer),
	);
};

import "./App.css";
import { useState } from "react";
import { AppLayout } from "./GameLayout/AppLayout";
import { isDraw, isWinner } from "./GameLayout/Information/check";
import { board as initialBoard } from "./GameLayout/Field/WinsArray";

export const AppContainer = () => {
	const [nextTurnSymbol, setNextTurnSymbol] = useState("X");
	const [board, setBoard] = useState(initialBoard);
	const [draw, setDraw] = useState(false);
	const [winner, setWinner] = useState(false);

	const handleClick = (ind) => {
		if (board[ind] || draw || winner) return;

		const newBoard = board.map((cell, idx) => (idx === ind ? nextTurnSymbol : cell));
		setBoard(newBoard);

		if (isWinner(newBoard, nextTurnSymbol)) {
			setWinner(true);
			return;
		}
		if (isDraw(newBoard)) {
			setDraw(true);
			return;
		}

		setNextTurnSymbol((prev) => (prev === "X" ? "O" : "X"));
	};

	const handleReset = () => {
		setBoard(initialBoard);
		setNextTurnSymbol("X");
		setDraw(false);
		setWinner(false);
	};

	return (
		<AppLayout
			nextTurnSymbol={nextTurnSymbol}
			board={board}
			handleClick={handleClick}
			draw={draw}
			winner={winner}
			handleReset={handleReset}
		/>
	);
};

import styles from "./Field.module.css";
import { getImage } from "../../Information/getImage";

const BoardLayout = ({ board, onClick }) => {
	return (
		<div className={styles.field}>
			{board.map((cell, index) => {
				return (
					<div key={index} onClick={() => onClick(index)}>
						{cell && getImage(cell)}
					</div>
				);
			})}
		</div>
	);
};

export const BoardContainer = ({ board, onClick }) => {
	return <BoardLayout board={board} onClick={onClick} />;
};

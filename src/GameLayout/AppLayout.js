import PropTypes from "prop-types";

import styles from "./App.module.css";
import { BoardContainer } from "./Field/FieldLayout/Field";
import { InfoContainer } from "./Information/InformationLayout/Information";

export const AppLayout = ({
	nextTurnSymbol,
	board,
	handleClick,
	draw,
	winner,
	handleReset,
}) => {
	return (
		<div>
			<div className={styles.game}>
				<h1>Крестики-нолики</h1>

				<InfoContainer
					draw={draw}
					winner={winner}
					nextTurnSymbol={nextTurnSymbol}
				/>
				<BoardContainer board={board} onClick={handleClick} />

				<div className={styles.buttonContainer}>
					<button className={styles.resetButton} onClick={handleReset}>
						Начать заново
					</button>
				</div>
			</div>
		</div>
	);
};

AppLayout.propTypes = {
	nextTurnSymbol: PropTypes.string,
	board: PropTypes.array,
	handleClick: PropTypes.func,
	draw: PropTypes.bool,
	winner: PropTypes.bool,
	handleReset: PropTypes.func,
};

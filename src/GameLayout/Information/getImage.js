import { cross, zero } from "./InformationLayout";

export const getImage = (cell) => {
	return <img src={cell === "X" ? cross : zero} alt="cell" />;
};

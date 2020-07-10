import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
//subcomponent ni siya sa history
export const HistoryTransactions = ({ transaction }) => {
	const { delTransaction } = useContext(GlobalContext);

	const { text, amount, id } = transaction;
	const sign = amount < 0 ? '-' : '+';
	return (
		<li className={amount < 0 ? 'minus' : 'plus'}>
			{text}
			<span>
				{/* gamit kag Math.abs para abosolute or wala negative sa list */}
				{sign} $ {Math.abs(amount)}
			</span>
			<button className="delete-btn" onClick={() => delTransaction(id)}>
				x
			</button>
		</li>
	);
};

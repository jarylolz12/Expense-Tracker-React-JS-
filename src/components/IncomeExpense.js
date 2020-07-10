import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);

	const amount = transactions.map((transaction) => transaction.amount);

	const incomeAmount = amount.filter((income) => income > 0);
	const totalIncome = incomeAmount.reduce((amount1, amount2) => (amount1 += amount2), 0).toFixed(2);

	const expenseAmount = amount.filter((income) => income < 0);
	const totalExpense = expenseAmount.reduce((amount1, amount2) => (amount1 += amount2), 0).toFixed(2);

	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">+${totalIncome}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">-${Math.abs(totalExpense)}</p>
			</div>
		</div>
	);
};

import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { History } from './components/History';
import { NewTransaction } from './components/NewTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<Header />
			<div className="container">
				<Balance />
				<IncomeExpense />
				<History />
				<NewTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
// this.orders.menu.forEach((menus) => {
// 	if (event.target.name === menus.name) {
// 		menus.isAvailable = !menus.isAvailable;
// 	}
// })

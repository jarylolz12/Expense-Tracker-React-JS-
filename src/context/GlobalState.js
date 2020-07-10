import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//create initial state
const initialState = {
	transactions: []
};

//create context
export const GlobalContext = createContext(initialState);

//provider component para sa app.js para ma access ang global contex or global state (initial state)
//gamit kag state reducer para sa application level state
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	//actions para dynamically ma update ang total amount pag i delete
	//ang behaviour is murag redux
	function delTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	//add ug transaction
	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}

	//para ma access ang state sa taas "initialState" or para ma specify ang gusto nimo i access
	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				delTransaction,
				addTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

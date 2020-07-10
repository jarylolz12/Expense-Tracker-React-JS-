import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState'
import {HistoryTransactions} from './HistoryTransactions'

export const History = () => {
    const {transactions} = useContext(GlobalContext);
   



    return (
    <> 
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(transaction => (
            // create kag subcomponent para sa list para hinlo imong code (HistoryTransactions.js
              <HistoryTransactions 
               key= {transaction.id} 
               transaction={transaction}
               />
            ))}
            
        </ul>
    </>
    )
}
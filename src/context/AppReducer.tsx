import { useReducer} from 'react';



type TransactionType = {
  id: number
}

// @ts-ignore
export default function AppReducer (state, action) {
  switch (action.type) {
    case 'DELETE_TRANSACTION': 
      return {
        ...state,
        transactions: state.transactions.filter((transaction: TransactionType) => {
          return transaction.id !== action.payload
        })
      }

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      }
    default:
      return state;
  }
};

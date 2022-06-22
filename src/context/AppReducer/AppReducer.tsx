import { ActionTypes } from './AppReducer.types';
import { TransactionType } from '../../components/Transaction/Transaction.types';
import { AppContextInitialState } from '../GlobalState/GlobalState.types';


export default function AppReducer(state: AppContextInitialState, action: ActionTypes) {

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

import { TransactionType } from "../../components/Transaction/Transaction.types";

export type ActionTypes =
  | { type: "ADD_TRANSACTION"; payload: TransactionType }
  | { type: "DELETE_TRANSACTION"; payload: number };

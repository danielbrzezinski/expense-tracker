import React, { useState, useContext, FunctionComponent, FormEvent, createRef } from "react";
import { GlobalContext } from '../../context/GlobalState/GlobalState';
import { TransactionType } from '../Transaction/Transaction.types';

const AddTransaction: FunctionComponent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const textInputField = createRef<HTMLInputElement>();
  
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    // prepare Transaction Object
    const newTransaction:TransactionType  = {
      id: Math.floor(Math.random() * 10000000000),
      text: text,
      amount: +amount, // Cast into Number otherwise this will be a string and throws an error
    };

    if(typeof addTransaction === 'function') {
      addTransaction(newTransaction);

      // reset form
      setText('');
      setAmount('');

      // autofocus text field
      if(textInputField.current) {
        console.log(textInputField.current.focus());
      }
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            id='text'
            value={text}
            autoFocus
            ref={textInputField}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br /> (negative - expanse, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
}

export { AddTransaction };
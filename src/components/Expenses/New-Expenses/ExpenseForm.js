import React,{useState} from "react";

import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    const [enteredTitle,SetenteredTitle]=useState('');
    const [enteredamount,Setenteredamount]=useState('');
    const [entereddate,Setentereddate]=useState('');

    // const [userInput,SetuserInput]=useState({
    //     enteredTitle:'',
    //     enteredamount:'',
    //     enteredDate:''
    // });
    
    const titleChangeHandler=(event)=>{
        SetenteredTitle(event.target.value);
        // SetuserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // })
    };

    const amountChangeHandler=(event)=>{
        Setenteredamount(event.target.value);
        // SetuserInput({
        //     ...userInput,
        //     enteredamount:event.target.value
        // })
    };
    const dateChangeHandler=(event)=>{
        Setentereddate(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: +enteredamount,
            date: new Date(entereddate)
        };
        props.onSaveExpenseData(expenseData);
        SetenteredTitle('');
        Setenteredamount('');
        Setentereddate('');
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={enteredamount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2023-12-31' value={entereddate} onChange={dateChangeHandler} />
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
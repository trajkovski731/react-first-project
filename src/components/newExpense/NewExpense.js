import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    let [showExpenseDialog, setShowExpenseDialog] = useState(false)
    const onClickNewExpense = () => {
        setShowExpenseDialog(true)
    }
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(enteredExpenseData)
    }

    const cancelOrAddExpenseClicked = () => {
        setShowExpenseDialog(false)
    }

    if (showExpenseDialog) {
        return (
            <div className="new-expense">
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelOrAddExpenseClicked={cancelOrAddExpenseClicked}/>
            </div>
        )
    }

    return (
        <div className="new-expense">
            <button onClick={onClickNewExpense}>Add new expense</button>
        </div>
    )
}

export default NewExpense;
import React, {useState} from "react";
import Card from "../UI/Card";
import './Expense.css'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default Expenses;


function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState("2020");

    let filterInfoText = 'Data for years 2019, 2020, 2021 is hidden';

    if (selectedYear === '2019') {
        filterInfoText = '2020, 2021 & 2022';
    } else if (selectedYear === '2020') {
        filterInfoText = '2019, 2021 & 2022';
    } else if (selectedYear === '2021') {
        filterInfoText = '2019, 2020 & 2022';
    } else if (selectedYear === '2022') {
        filterInfoText = '2019, 2020 & 2021'
    }

    let filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === selectedYear
    })

    const selectYear = year => {
        setSelectedYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    chosenYear={selectedYear}
                    onSelectedYear={selectYear}/>
                <p>{filterInfoText}</p>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}
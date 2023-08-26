import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
import './ExpenseList.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default Expenses;


function Expenses(props) {

    const [selectedYear, setSelectedYear] = useState("2020");

    let filterInfoText = 'Data for years 2019, 2020, 2021 is hidden';

    if (selectedYear === '2019') {
        filterInfoText = '2020, 2021 & 2022';
    } else if (selectedYear === '2020') {
        debugger
        filterInfoText = '2019, 2021 & 2022';
    } else if (selectedYear === '2021') {
        filterInfoText = '2019, 2020 & 2022';
    } else if (selectedYear === '2022') {
        filterInfoText = '2019, 2020 & 2021'
    }

    const selectYear = year => {
        console.log("This is from the expense list: " + year)
        setSelectedYear(year);
        console.log(selectedYear)
        debugger

    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    chosenYear={selectedYear}
                    onSelectedYear={selectYear}/>
                <p>{filterInfoText}</p>
                {props.items.map(expense => {
                    if (expense.date.getFullYear() === selectedYear) {
                        return (
                            <ExpenseItem
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        );
                    } else {
                        return null; // Don't render anything for other expenses
                    }
                })}
            </Card>
        </div>
    )
}
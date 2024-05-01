import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const AllocationForm = () => {
    const { expenses,currency } = useContext(AppContext);
    return (
    <div>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Department</th>
            <th scope="col">Allocated Budget</th>
            <th scope="col">Increase by 10</th>
            <th scope="col">Decrease by 10</th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense) => (
                    <ExpenseItem currency ={currency} id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </tbody>
        </table>
    </div>
    );
};
export default AllocationForm;
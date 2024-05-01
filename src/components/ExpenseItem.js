import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoMdAddCircle } from "react-icons/io";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleReduceExpense = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.currency}{props.cost}</td>
        <td><IoMdAddCircle size='1.5em' color ='green'onClick={event=> increaseAllocation(props.name)}/></td>
        <td><TiDelete size='2em' color ='red' onClick={event=>handleReduceExpense((props.name))}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
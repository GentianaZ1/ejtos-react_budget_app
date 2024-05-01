import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
import ExpenseTotal from './ExpenseTotal';
import CurrencySelection from './CurrrencySelection';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    // Function to handle budget change
    const handleBudgetChange = (event) => {
        // Update the local state with the current input value
        setNewBudget(event.target.value);
    }
    
    // Function to handle completion of input (when it loses focus)
    const handleBudgetBlur = () => {
        // Dispatch the 'SET_BUDGET' action with the updated value when input is complete
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    
    return (
        <div className="d-flex align-items-start gap-3">
            <div className='col alert alert-secondary'>
                <span>Budget: {currency}{budget}</span>
                {/* Use onBlur event instead of onChange */}
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onBlur={handleBudgetBlur}></input>
            </div>
            <Remaining/>
            <ExpenseTotal/>
            <CurrencySelection/>
        </div>
    );
};
export default Budget;

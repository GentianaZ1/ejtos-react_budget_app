import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelection = () => {
  const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    

  return (
        <div className='col align-self-stretch alert alert-secondary'> 
        <select name="Currency" id="Currency" 
                style={{
                backgroundColor: '#4FFFB0',
                color: 'white', 
                padding: '5px'
            }}        
        onChange={event=>changeCurrency(event.target.value) }defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled hidden>Currency (£ Pound)</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="₹">₹ Ruppee</option>
            <option value="€">€ Euro</option>
        </select>		
    </div>
    );
};

export default CurrencySelection;
import React from 'react';

const AmountBox = function ({amountChange, amount}) {
    return(
        <div className='dib pa2'>
        <input
            className='pa3 ba b--green bg-lightest-blue'
            type='number'
            value = {amount}
            onChange={amountChange}
            min = '5'
            max = '25'
        />
        </div>
    );
};

export default AmountBox;
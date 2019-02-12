import React from 'react';

const Searchbox = ({seechfield,searchChange})=> {
    return (
        <div className='pa2'>
        <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search your robots'
            onChange={searchChange}
        />
        </div>
    );
};

    export default Searchbox;
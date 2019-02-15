import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid darkblue', height: '695px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
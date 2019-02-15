import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflowY: 'scroll', border: '1px solid darkblue', height: '700px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
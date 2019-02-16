import React from 'react';

const Scroll = (props) =>{

    return (
        <div style={{overflowY: 'scroll', border: '1px solid darkblue', height: 'calc(100vh - 220px)'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
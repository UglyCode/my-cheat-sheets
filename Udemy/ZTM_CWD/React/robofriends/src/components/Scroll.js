import React from 'react';

const Scroll = (props) =>{
    return (
        <diV style={{overflowY: 'scroll', border: '1px solid darkblue', height: '500px'}}>
            {props.children}
        </diV>
    );
};

export default Scroll;
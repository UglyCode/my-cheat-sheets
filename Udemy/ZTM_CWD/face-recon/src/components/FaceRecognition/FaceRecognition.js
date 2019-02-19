import React from 'react';

const FaceRecognition = ({imgLink}) =>{

    return(
        <div className='centerFlex'>
            <img alt='your image' src={imgLink} style={{width: '500px', height: 'auto'}}/>
        </div>
    );
};

export default FaceRecognition;
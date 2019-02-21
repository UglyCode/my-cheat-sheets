import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgLink, imgBox}) =>{
    console.log(imgBox,imgBox.top_row,imgBox.left_col, imgBox.bottom_row, imgBox.right_col);
    return(
        <div className='centerFlex'>
            <div style={{width: '500px', position: 'relative'}}>
                <img id='inputImg' alt='target' src={imgLink} style={{width: '100%', height: 'auto'}}/>
                <div className='bounding-box'
                     style={{
                         top: `${imgBox.top_row}%`,
                         right: `${imgBox.right_col}%`,
                         bottom: `${imgBox.bottom_row}%`,
                         left: `${imgBox.left_col}%`}}>

                </div>
            </div>
        </div>
    );
};

export default FaceRecognition;


import React from 'react';
import './imgLink.css';


const ImageLinkForm = () =>{

    return(
        <div className='ma4 mt0'>
            <p className='f3'>
                {'New magic tricks in face recognition app. Try IT!'}
            </p>
            <div className='centerFlex'>
                <div className='centerFlex form pa4 br3 shadow-5'>
                    <input className='f5 pa2 w-70 center' type='text'/>
                    <button className='w-30 grow f5 link ph3 dib white bg-green'>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;
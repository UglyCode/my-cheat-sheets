import React, {components} from 'react';

const Card = () => {

    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5-l'>
            <img src = 'https://robohash.org/test?200x200' alt = 'robots'/>
            <div>
                <h2>Appostnikov</h2>
                <p>appostnikov@gmail.com</p>
            </div>
        </div>

    );

};
    export default Card;
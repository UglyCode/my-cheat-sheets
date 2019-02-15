import React, {components} from 'react';

const Card = ({name, description, id}) => {

    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5-l tc'>
            <img src = {`https://robohash.org/${id}?size=200x200`} alt = 'robots'/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>

    );

};
    export default Card;
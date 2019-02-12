import React, {components} from 'react';

const Card = ({name, email, id}) => {

    return (

        <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5-l tc'>
            <img src = {`https://robohash.org/${id}?size=400x400`} alt = 'robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );

};
    export default Card;
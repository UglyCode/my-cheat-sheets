import React, {components} from 'react';
import Description from './DecriptionRow';

const Card = ({name, description, id, cardClick}) => {

    return (

        <div
            className='bg-light-blue dib br3 pa3 ma2 grow bw-2 shadow-5-l tc'
            onClick={cardClick}
            id={id}
        >
            <img src = {`https://robohash.org/${id}?size=200x200`} alt = 'robots'/>
            <div>
                <h3>{name}</h3>
                <table>
                    {
                        Object.keys(description).map(key => {
                            return <Description name={key} value={description[key]}/>
                        })
                    }
                </table>
            </div>
        </div>

    );

};
    export default Card;
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
                <table className="f6 w-100 mw8 center" cellSpacing="0">
                    <thead>
                {
                    Object.keys(description).map(keyName => {
                        return <Description key={id+'/'+keyName} name={keyName} value={description[keyName]}/>
                    })
                }
                    </thead>
                </table>
            </div>
        </div>

    );

};
    export default Card;
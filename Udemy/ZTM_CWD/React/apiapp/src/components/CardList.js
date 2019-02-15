import React from 'react';
import Card from "./Card";

const CardList = ({robots})=>{

    return(
    <div>
        {
            robots.map((elem, i) => {
                return (
                    <Card
                        key={i}
                        id={i}
                        name={elem.name}
                        description={`height: ${elem.height}, mass: ${elem.mass}`}/> //
                );
            })
        }
    </div>
    );
};

export default CardList;
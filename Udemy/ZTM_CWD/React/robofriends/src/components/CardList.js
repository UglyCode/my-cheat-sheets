import React from 'react';
import Card from "./Card";

const CardList = ({robots})=>{

    return(
    <div>
        {
            robots.map(elem => {
                return (
                    <Card
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        email={elem.email}/>
                );
            })
        }
    </div>
    );
};

export default CardList;
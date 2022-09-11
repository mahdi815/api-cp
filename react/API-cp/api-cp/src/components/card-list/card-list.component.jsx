import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css'


function CardList (props) {
    const { monsters } = props; 

    return (
        <div className='card-list'> 
            {monsters.map((monster) => {
                return <Card monster={monster} />;
            })}
        </div>
    );
};
export default CardList;


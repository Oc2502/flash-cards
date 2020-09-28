import React from 'react';
import CardItem from './CardItem'


const CardsList = (props) => {

    const renderCardsList = props.cards.map(card => {
        return <CardItem cardItem = {card}/>
    })

    return(
        <div className = "container cardsList">
            <h3>YOUR FLASH CARDS</h3>
            <div className = "cards" >{renderCardsList}</div>
        </div>
    )
}
 
export default CardsList;
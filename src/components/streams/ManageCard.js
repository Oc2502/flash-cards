import React from 'react';
import flashCards from '../../apis/flashCards';
import AddCard from '../AddCard';
import CardsList from '../CardsList';


class ManagaeCard extends React.Component {

    state = { cards : [] };

    componentDidMount = async () => {
        const response = await flashCards.get('flash-card')
        this.setState({cards : response.data})
        console.log('hi')
    };

    onCardSubmit = async () => {
        console.log('hi')
        const response = await flashCards.get('flash-card')
        console.log(response.data.length)
        this.setState({cards : response.data})
    };


    render() { 
        return ( 
            <div className="container">
                <AddCard onFormSubmit={this.onCardSubmit}/>
                <CardsList cards={this.state.cards}/>
            </div>
         );
    };
};
 
export default ManagaeCard;

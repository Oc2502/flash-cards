import React from "react";
import flashCards from '../apis/flashCards'

class CardItem extends React.Component {
  state = { edit: false, delete: false };

  // add edit and delet event

  onButtonClick = async(e) => {
    const response = await flashCards.delete(`flash-card/${this.props.cardItem.id}`)
    // need to add props to render yhe page
  }

  render() {
    return (
      <div className="container box" key={this.props.cardItem.id}>
        <span>QUESTION: {this.props.cardItem.question}</span>
        <span>ANSWER: {this.props.cardItem.answer}</span>
        <div>
          <button className="btn">Edit</button>
          <button onClick={this.onButtonClick} className="btn">Delete</button>
        </div>
      </div>
    );
  }
}

export default CardItem;

import React from "react";
import flashCards from "../../apis/flashCards";
import CardsList from "../CardsList";

class FlashCard extends React.Component {
  state = { flashcard: [], currentCard: {}, reveal: false, index: 0 };

  componentDidMount = async () => {
    const response = await flashCards.get("flash-card");
    this.setState({ flashcard: response.data.sort(()=> Math.random() - 0.5) });
    console.log(this.state.flashcard[0])
    this.setState({currentCard : this.state.flashcard[0]})
    console.log('are you render')
  };


  onNewCardClick = () => {
    this.setState({index : this.state.index + 1}, ()=> {
      this.setState({currentCard: this.state.flashcard[this.state.index]});
      this.setState({reveal: false})
    }); 
   
  };

  onRevealClick = () => {
    this.setState({reveal: true})
  }

  render() {
    return (
      <div className="container">
       
        <div className="box">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div>{this.state.reveal ? this.state.currentCard.answer :  this.state.currentCard.question }</div>
              {/* <div class="flip-card-front">{this.state.currentCard.question}</div>
              <div class="flip-card-back">{this.state.currentCard.answer}</div> */}
            </div>
          </div>
        </div>
        <button className="btn" onClick={this.onNewCardClick}>New card</button>
        <button className="btn" onClick={this.onRevealClick}>Reveal answer</button>
        <div>{this.state.reveal? <div class="container"> Did you get it right? </div> : null}</div>
        <div>Completed </div>
      </div>
    );
  }
}

export default FlashCard;

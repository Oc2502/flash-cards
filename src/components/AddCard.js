import React from 'react';
import flashCards from '../apis/flashCards'

class AddCard extends React.Component {
    state = { question: '' , answer: '' }

    onFormSubmit = async (e) => {
        e.preventDefault();

        const response = await flashCards.post('flash-card', {question:`${this.state.question}`, answer: `${this.state.answer}`})
        this.setState({ question: '', answer: '' });
        this.props.onFormSubmit()
    };

    onInputChange = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value,
        });
    };

    render() { 
        return ( 
            <div className="container box">
                <h3>Add a new Flash Card: </h3>
                <form onSubmit={this.onFormSubmit}> 
                    <textarea rows="5" cols="20"
                    name="question"
                    placeholder='Enter your question'
                    value = {this.state.question}
                    onChange={this.onInputChange}
                    /><br/>
                    <textarea rows="5" cols="20"
                    name="answer"
                    placeholder='Enter your answer'
                    value = {this.state.answer}
                    onChange={this.onInputChange}
                    /><br/>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default AddCard;
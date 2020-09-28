import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import './style.css';
import FlashCard from './streams/FlashCard';
import ManageCard from './streams/ManageCard';


class App extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/flash-card" component={FlashCard}/>
                    <Route path="/manage-card" component={ManageCard}/>
                </div>
                </BrowserRouter>
            </div>
        );
    };
};


export default App;

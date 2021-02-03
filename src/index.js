import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
    render(){
        return(
            <img src="arms_front.gif" alt="Big Boi"></img>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
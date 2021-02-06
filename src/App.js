import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';

import arms_front from './../img/arms_front.gif'

class App extends React.Component {
    render() {
        return(
            <Router>
                <div className="navFlexContain">
                    <nav>
                        <Link className="navFlex" to="/">Home</Link>
                        <Link className="navFlex" to="/about">ABOUT</Link>
                        <Link className="navFlex" to="/care">CARE SHEETS</Link>
                        <Link className="navFlex" to="/contact">CONTACT</Link>
                        <Link className="navFlex" to="/shop">SHOP NOW</Link>
                        <Link className="navFlex" to="/blog">THE SMUG BLOG</Link>
                    </nav>
                </div>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <img src={arms_front} alt="Big Boi"></img>
        </div>    
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App
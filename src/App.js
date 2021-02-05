import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <div className="nav">
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/about">ABOUT</Link>
                            <Link to="/care">CARE SHEETS</Link>
                            <Link to="/contact">CONTACT</Link>
                            <Link to="/shop">SHOP NOW</Link>
                            <Link to="/blog">THE SMUG BLOG</Link>
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
            </div>
        )
    }
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
            <img src="arms_front.gif" alt="Big Boi"></img>
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
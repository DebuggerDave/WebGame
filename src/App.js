import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Care from './Care';
import Contact from './Contact';
import Shop from './Shop';
import Blog from './Blog';

import './index.css';

import facebook from './img/facebook.webp';
import instagram from './img/instagram.webp';

class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <nav style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'green', padding: '2% 15% 2% 15%'}}>
                            <Link className="navFlex" to="/">WELCOME</Link>
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
                        <Route path="/care">
                            <Care />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/shop">
                            <Shop />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>

                <footer style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'green', padding: '0% 2% 0% 2%'}}>
                    <p >©2019 by Smug Bug.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '10%'}}>
                        <img src={facebook} alt='Facebook'/>
                        <img src={instagram} alt='Instagram'/>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App
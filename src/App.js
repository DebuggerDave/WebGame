import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './index.css';

import facebook from './../img/facebook.webp'
import instagram from './../img/instagram.webp'
import theSmugBug from './../img/smug_bug.webp'
import homeBugRectangle from './../img/home_bug_rectangle.webp'
import squareBug from './../img/bug_square.webp'
import aboutBugRectangle from './../img/about_bug_rectangle.webp'
import busyLaura from './../img/busy_laura.webp'
import singleBug from './../img/single_bug.webp'

class App extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <nav style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'green', padding: '2% 0% 2% 0%'}}>
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

                <footer style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'green', padding: '0% 2% 0% 2%'}}>
                    <p >©2019 by Smug Bug.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '10%'}}>
                        <img src={facebook} alt='Facebook'/>
                        <img src={instagram} alt='Instagram'/>
                    </div>
                </footer>

            </div>
        )
    }
}

function Home() {
    return (
        <div>
            <img src={homeBugRectangle} alt='Bug background'/>
            <img src={theSmugBug} alt='Smug Bug herself'/>
            <img src={squareBug} alt='Bug picture'/>
            <h1>We offer a large selection of isopods!</h1>
            <p>
                All of our isopods are produced inhouse from captive bred stock. Cultures are not available until they have been in our possession for a year or longer.
            </p>
            <h1>Subscribe for Updates</h1>
        </div>    
    );
}

function About() {
    return (
        <div>
            <img src={aboutBugRectangle} alt='Bug background'/>
            <img src={busyLaura} alt='Laura hard at work'/>
            <h1>About</h1>
            <h3>Thanks for Visiting Smug Bug!</h3>
            <p>
                I've been collecting and selling invertebrates for a few years now. It started as feeders for my reptile collection, but then as my interest in the hobby grew I transitioned all my tanks to bioactive enclosures. That's how I found isopods! My knowledge and collection has been growing ever since, and I love to share what I've learned and what I've collected with all of you!
            </p>
            <h3>Our Mission</h3>
            <p>
                We strive to provide high quality invertebrates and educate about the magnificent variety and uses that nature has to offer. All of our cultures are produced in-house from captive bred stock, cultures are not for sale until they have been in our possession for a year or more.
            </p>
            <img src={singleBug} alt='Bug picture'/>
            <h3>Terms of Service</h3>
            <div>
                <p>
                    TERMS OF SERVICE Reptiles are to be shipped overnight exclusively through FedEx, invertebrates are shipped through USPS ground (2day). Shipping is offered throughout the US, legalities of keeping species in particular states is the responsibility of the buyer. The shipping company used is up to the discretion of the seller/buyer. Reptiles are shipped Mon-Thurs, invertebrates are shipped Mondays and Tuesdays. Live arrival guarantee is with all animals, if there is an issue on arrival the buyer MUST notify the seller within 1 hour of receipt of animal in order to receive refund. Photos may be requested. PAYMENT PLANS Payment Plans will be considered on orders of $100 or more of REPTILES ONLY. The buyer must place a $50 nonrefundable deposit. In this case, the deposit will NOT be returned in the case of a cancellation of a sale. Payment plans may last as long as 30 days. The animal must be paid, in full, on the agreed upon date on the place of the deposit. If final payment is not received by the predetermined date, the animal will be relisted for sale to the public and the deposit will NOT be returned. Payment is accepted through Paypal. If you do not have a Paypal, We can send you an invoice to pay with a credit card. It is the BUYER’S responsibility to know if an animal is legal to own within the state. Many species of roach are illegal in states such as Florida.
                </p>
                <p>
                    ** If destination temp is below 40F or above 80F, will be marked hold for pickup for a valid live arrival guarantee.
                </p>
            </div>
        </div>
    );
}

function Users() {
    return <h2>Users</h2>;
}

export default App
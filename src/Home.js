import React from 'react';

import princess from './../img/smug_bug.webp';
import bugRectangle from './../img/home_bug_rectangle.webp';
import bugSquare from './../img/home_bug_square.webp';

//<div style={{maxHeight: 10}}>
//<img style={{width: '100%', objectFit: 'cover'}} src={bugRectangle} alt='Bug Background'/>
//</div>

class Home extends React.Component {
    render() {
        return (
            <div>
                <div style={{width: '100%', height: '20%', backgroundImage: 'url(' + bugRectangle + ')'}}></div>
                <div style={{backgroundColor: 'grey', margin: '0% 20% 0% 20%'}}>
                    <div>
                        <div style={{position: 'absolute'}}>
                            <img src={princess} alt='Princess'/>
                        </div>
                    </div>
                    <img src={bugSquare} alt='Bug picture'/>
                    <h1>We offer a large selection of isopods!</h1>
                    <p>
                        All of our isopods are produced inhouse from captive bred stock. Cultures are not available until they have been in our possession for a year or longer.
                    </p>
                    <h1>Subscribe for Updates</h1>
                </div>
            </div>
        );
    }
}

export default Home
